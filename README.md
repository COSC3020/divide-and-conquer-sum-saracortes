# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

If the algorithm goes to the base case, it will have a time complexity of T(1)=1. Splitting the array then has a constant time complexity (T(n)=1). After that, it makes 3 recursive calls on a third of the input and adds them so the time complexity will be T(n) = 3T(n/3). And adding the sum of the arrays also has a time complexity of T(1)=1. 
This means that the recurrence relation is T(n) = 1 when n<=1. T(n) = 3T(n/3) when n>1.

To determine the theta complexity of \( T(n) \), we repeatedly replace \( T(n) \) with its own formula to see how it changes with each step. We then figure out how many times we can do this before reaching the base case and simplify \( T(n) \) so that it no longer refers to itself.

With each step, \( T(n) \) changes according to:

$$
3^i T\left(\frac{n}{3^i}\right) + \sum_{k=0}^{i-1} 3^{k+1}
$$

where \( i \) is the number of times we repeat this process before reaching the base case. Because we divide \( n \) by 3 at each step, we will reach the base case after about \( \log_3 n \) steps.

By substituting \( i = \log_3 n \), 

$$
3^{\log_3 n} T\left(\frac{n}{3^{\log_3 n}}\right)
$$ 

simplifies to \( n \), because \( T(1) \) is a constant and \( 3^{\log_3 n} = n \). The extra summation term is not significant in big-theta notation, so we are able to conclude that:

$$
T(n) \in \Theta(n)
$$



In order to find the recurrence relation, I used the notes from class.


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
