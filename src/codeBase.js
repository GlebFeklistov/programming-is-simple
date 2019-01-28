module.exports = {
  vars: {
    'js': `
    var a,b,c;
    let x;
    function(a,b,c) {
      console.log('hello world');
    }
    `,
    'c#': `
        using System;
        using System.Collections.Generic;
        using System.Linq;
        using System.Text.RegularExpressions;
    
        namespace Rextester
    {
      public class Program
    {
      public static void Main(string[] args)
    {
      //Your code goes here
      Console.WriteLine("Hello, world!");
    }
    }
    }
    `
  }
};
