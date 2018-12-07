# Breakpoints

You want to tweak a utility class so that it only fires on certain screen sizes?
Then say hello to your new friend, the **breakpoint system**.

A number of utility classes have been selected to feature responsiveness-control. These classes can be
extended with breakpoint modifiers, such as "hide<b>-on-s</b>".

The actual breakpoint values can be customized via global configuration variables, but you're encouraged to use
the recommended default values, which are not based on common screen sizes (contrary to most other CSS libraries)
but instead simply on **columns divisible by 300px**. Given the variety of screen sizes in modern devices,
there is simply no benefit in using screen-resolution-oriented breakpoints&mdash;why not simply
use something that is easy to remember and work with?

This is how the default breakpoint system in PragmaCSS looks like:

| s       | m         | l          | x           | p        |
|:-------:|:---------:|:----------:|:-----------:|:--------:|
| 0-600px | 601-900px | 901-1200px | 1201-1500px | 1501px+  |

::: tip GOOD TO KNOW
s, m and l stand for **small**, **medium** and **large**, respectively -- as one would expect.
What's a tad less obvious: The x stands for **extra-large** and the p stands for "plus",
to cover everything exceeding extra-large.
:::

<br>

For convenience purposes, it's also possible to combine multiple breakpoints as such:

| Name | Combines | Sizes      |
|:----:|:--------:|:----------:|
| sm   | s & m    | 0-900px    |
| ml   | m & l    | 601-1200px |
| lx   | l & x    | 901-1500px |
| xp   | x & p    | 1501px+    |

And even further:

| Name | Combines  | Sizes      |
|:----:|:---------:|:----------:|
| sml  | s & m & l | 0-1200px   |
| mlx  | m & l & x | 601-1500px |
| lxp  | l & x & p | 901-~      |

<br>

Naturally, you can also just combine multiple utility classes with breakpoint modifiers for very specific
use cases. For example, if you want to hide an element on small and medium screens, as well as everything
past very large, use this combo: **hide-on-sm hide-on-p**

<br>

::: tip INFO
Utility classes with breakpoint modifiers will be explicitly denoted as such in their
corresponding documentation section.
:::
