using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;

namespace ParallelSample
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var timer = new Stopwatch();
            timer.Start();

            var actions = new List<Action>()
            {
                () => DoSomeTask(1, timer),
                () => DoSomeTask(2, timer),
                () => DoSomeTask(3, timer),
                () => DoSomeTask(4, timer),
                () => DoSomeTask(5, timer),
                () => DoSomeTask(6, timer),
                () => DoSomeTask(7, timer),
            }.ToArray();

            Parallel.Invoke(actions);

            //DoSomeTask(1, timer);
            //DoSomeTask(2, timer);
            //DoSomeTask(3, timer);
            //DoSomeTask(4, timer);
            //DoSomeTask(5, timer);
            //DoSomeTask(6, timer);
            //DoSomeTask(7, timer);

            Console.WriteLine("Total time - " + timer.Elapsed.ToString());
            Console.ReadKey();
        }
        static void DoSomeTask(int number, Stopwatch timer)
        {
            Console.WriteLine($"DoSomeTask {number} started by Thread {Thread.CurrentThread.ManagedThreadId}");
            //Sleep for 5000 milliseconds
            Thread.Sleep(5000);
            Console.WriteLine($"Timer {number} - " + timer.Elapsed.ToString());
        }
    }
}
