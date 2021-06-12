using ProcessMemoryReaderLib;
using System;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using Timer = System.Threading.Timer;

namespace Controls_Randomizer
{
    public partial class formMain : Form
    {
        // Declare some global variables.
        static Process FF8Process;
        static string GameVersion;
        static IntPtr GameBaseAddress;
        static Timer t;
        static List<int> allControls = new List<int>();
        static Dictionary<int,int> defaults = new Dictionary<int, int>();

        static Dictionary<string, List<int>> buttons = new Dictionary<string, List<int>>
        {
            { "EN", new List<int>
                {
                    0x18D0228,
                    0x18D0229,
                    0x18D022A,
                    0x18D022B,
                    0x18D022C,
                    0x18D022D,
                    0x18D022E,
                    0x18D022F
                }
            },
            { "FR", new List<int>
                {
                    0x18CFF00,
                    0x18CFF01,
                    0x18CFF02,
                    0x18CFF03,
                    0x18CFF04,
                    0x18CFF05,
                    0x18CFF06,
                    0x18CFF07
                }
            }
        };

        static Dictionary<string, List<int>> directions = new Dictionary<string, List<int>>
        {
            { "EN", new List<int>
                {
                    0x18D0234,
                    0x18D0235,
                    0x18D0236,
                    0x18D0237
                }
            },
            { "FR", new List<int>
                {
                    0x18CFF0C,
                    0x18CFF0D,
                    0x18CFF0E,
                    0x18CFF0F
                }
            }
        };

        public formMain()
        {
            InitializeComponent();
        }
        // Thread-Safe Call to Windows Forms Control
        delegate void SetStatusTextCallback(string text);
        public void SetStatusText(string text)
        {
            if (this.lblStatus.InvokeRequired)
            {
                SetStatusTextCallback d = new SetStatusTextCallback(SetStatusText);
                this.Invoke(d, new object[] { text });
            }
            else
            {
                this.lblStatus.Text = text;
            }
        }
        delegate void SetButtonCallback(bool enable);
        public void SetButton(bool enable)
        {
            if (this.btnStart.InvokeRequired)
            {
                SetButtonCallback d = new SetButtonCallback(SetButton);
                this.Invoke(d, new object[] { enable });
            }
            else
            {
                this.btnStart.Enabled = enable;
            }
        }
        private void BeginCodeProcessing()
        {
            // Detect the game
            SetStatusText("Waiting for game to start.");
            DetectGame();
        }
        private async void DetectGame()
        {
            // Find the FF8 process.
            Console.WriteLine("Checking for game...");
            Process ff8Game = await Task.Run(FindGame);
            Console.WriteLine("Game found.");

            // Get the language from the process name (i.e. remove "FF8_" from the name)
            GameVersion = ff8Game.ProcessName.Substring(4);
            GameBaseAddress = ff8Game.MainModule.BaseAddress;

            // Add event handler for exited process
            ff8Game.EnableRaisingEvents = true;
            ff8Game.Exited += new EventHandler(myprc_Exited);

            FF8Process = ff8Game;


            // Set our combined list
            allControls = buttons[GameVersion].Concat(directions[GameVersion]).ToList();

            // Update status
            SetStatusText(GameVersion + " - Waiting for start button.");
            btnStart.Enabled = true;
        }

        private Process FindGame()
        {
            List<Process> processes = new List<Process>();
            do
            {
                processes = Process.GetProcesses()
                .Where(x => (x.ProcessName.StartsWith("FF8_", StringComparison.OrdinalIgnoreCase))
                            && !(x.ProcessName.Equals("FF8_Launcher", StringComparison.OrdinalIgnoreCase)))
                .ToList();
            } while (processes.Count == 0);

            return processes[0];
        }

        private int ReadMemoryAddress(int offset, uint bytelength)
        {
            int bytesReadSize;

            ProcessMemoryReader reader = new ProcessMemoryReader();

            reader.ReadProcess = FF8Process;
            reader.OpenProcess();

            IntPtr readAddress = IntPtr.Add(GameBaseAddress, offset);
            byte[] mem = reader.ReadProcessMemory(readAddress, bytelength, out bytesReadSize);

            int i = ByteToInt(mem, bytesReadSize);

            reader.CloseHandle();

            return i;
        }
        private void WriteMemoryAddress(int offset, int data)
        {
            int bytesWrittenSize;

            byte[] result = IntToByteArray(data);

            ProcessMemoryReader reader = new ProcessMemoryReader();

            reader.ReadProcess = FF8Process;
            reader.OpenProcess();

            IntPtr readAddress = IntPtr.Add(GameBaseAddress, offset);
            reader.WriteProcessMemory(readAddress, result, out bytesWrittenSize);

            reader.CloseHandle();
        }

        public static byte[] IntToByteArray(int input)
        {
            byte[] array = BitConverter.GetBytes(input);

            int lastIndex = Array.FindLastIndex(array, b => b != 0);

            Array.Resize(ref array, lastIndex + 1);

            return array;
        }
        private int ByteToInt(byte[] bytes, int size)
        {
            int i = 0;
            try
            {
                if (size == 4)
                {
                    i = BitConverter.ToInt32(bytes, 0);
                }
                else if (size == 2)
                {
                    i = BitConverter.ToInt16(bytes, 0);
                }
                else if (size == 1)
                {
                    i = bytes[0];
                }
            }
            catch (Exception e)
            {
                SetStatusText("Program error. ByteToInt issue.");
                Console.WriteLine(e.Message);
            }
            return i;
        }

        private void myprc_Exited(object sender, EventArgs e)
        {
            // Kill the timer if it exists already
            if (t != null)
                t.Dispose();

            // Disable start button
            btnStart.Enabled = false;

            BeginCodeProcessing();
        }

        private void formMain_Load(object sender, EventArgs e)
        {
            BeginCodeProcessing();
        }

        private void btnStart_Click(object sender, EventArgs e)
        {
            if(t == null)
            {
                checkFullRandom.Enabled = false;
                numTimer.Enabled = false;
                btnStart.Text = "Stop";

                bool fullRando = checkFullRandom.Checked;

                // Save the current control scheme
                SaveDefaults();

                t = new Timer(DoRando, fullRando, 0, (int)numTimer.Value * 1000);
            }
            else
            {
                t.Dispose();
                t = null;
                checkFullRandom.Enabled = true;
                numTimer.Enabled = true;
                btnStart.Text = "Start";
                SetStatusText(GameVersion + " - Waiting for start button.");

                // Restore control scheme
                RestoreDefaults();
            }
        }
        private void DoRando (Object fullRando)
        {
            bool full = (bool)fullRando;
            SetStatusText("Randomizing every " + numTimer.Value + " seconds.");

            if(full)
            {
                RandomizeControls(allControls);
            }
            else
            {
                // Randomize them separately
                RandomizeControls(buttons[GameVersion]);
                RandomizeControls(directions[GameVersion]);
            }
        }

        private void RandomizeControls(List<int> offsets)
        {
            List<int> controls = new List<int>();

            // Read all the values
            foreach (var offset in offsets)
            {
                int mem = ReadMemoryAddress(offset, 1);
                controls.Add(mem);
            }

            // Shuffle the values
            controls.Shuffle();

            // Write all values
            int i = 0;
            foreach (var offset in offsets)
            {
                WriteMemoryAddress(offset, controls[i]);
                i++;
            }
        }

        private void SaveDefaults()
        {
            defaults.Clear();

            // Read all the values
            foreach (var offset in allControls)
            {
                int mem = ReadMemoryAddress(offset, 1);
                defaults.Add(offset, mem);
            }
        }
        private void RestoreDefaults()
        {
            // Write all values
            int i = 0;
            foreach (var offset in allControls)
            {
                WriteMemoryAddress(offset, defaults[offset]);
                i++;
            }
        }
    }
    public static class IListExtensions
    {
        private static Random rng = new Random();

        public static void Shuffle<T>(this IList<T> list)
        {
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }
    }
}
