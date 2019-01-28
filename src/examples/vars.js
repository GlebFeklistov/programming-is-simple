module.exports = {
  js: `print("Hello, world!")`,
  php: `<?php 
  echo "Hello, world!"
?>`,
  sharp: `using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Rextester {
  public class Program {
    public static void Main(string[] args) {
      Console.WriteLine("Hello, world!");
    }
  }
}`,
  cpp: `#include <iostream>

int main()
{
  std::cout << "Hello, world!\\n";
}`,
  pascal: `program HelloWorld;
  
begin
  writeln('Hello, world!');
end.`,
  python: `print "Hello, world!"`,
  basic: `Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Text.RegularExpressions

Namespace Rextester
  Public Module Program
    Public Sub Main(args() As string)
      Console.WriteLine("Hello, world!")
    End Sub
  End Module
End Namespace`
};
