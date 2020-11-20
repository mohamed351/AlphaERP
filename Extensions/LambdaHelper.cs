using System;
using System.Collections.Generic;

public static class LambdaHelper
    {
      public static void Each<T>( this IEnumerable<T> items, Action<T> action)
      {
       foreach (var item in items)
        action(item);
      }   
 }