describe('test', function() {
  it('returns a given string', function() {
    expect(test('Hello World')).toEqual('Hello World');
  });
})

describe('nearby', function() {
  it('takes a string in and returns true if the letter z appears within three letters **after** an a', function() {
    expect(nearby('baz')).toEqual(true);
  });

  it('takes a string in and returns true if the letter z appears within three letters **after** an a', function() {
    expect(nearby('babbz')).toEqual(true);
  });

  it('takes a string in and returns false if the letter z not appears within three letters **after** an a', function() {
    expect(nearby('bba')).toEqual(false);
  });

  it('takes a string in and returns false if the letter z not appears within three letters **after** an a', function() {
    expect(nearby('z')).toEqual(false);
  });
})

describe('power of two', function() {
  it('takes in a number and returns true if it is a power of 2', function() {
    expect(powerOfTwo(1)).toEqual(1);
  });

  it('takes in a number and returns true if it is a power of 2', function() {
    expect(powerOfTwo(64)).toEqual(true);
  });

  it('takes in a number and returns false if it is not a power of 2', function() {
    expect(powerOfTwo(78)).toEqual(false);
  });
  
  it('takes in a number and returns false if it is not a power of 2', function() {
    expect(powerOfTwo(0)).toEqual(false);
  });
})

describe('most common letter', function() {
  it('return the most common letter in the array, and a count of how many times it appears.', function() {
    expect(mostCommonLetter('abca')).toEqual(['a', 2]);
  });

  it('return the most common letter in the array, and a count of how many times it appears.', function() {
    expect(mostCommonLetter('abcrbasub')).toEqual(['b', 3]);
  });  
})

describe('scarmble string', function() {
  it('capitalizes the first letter of each word.', function() {
    expect(scrambleString('abcd', [3, 1, 2, 0])).toEqual('dbca');
  });

  it('capitalizes the first letter of each word.', function() {
    expect(scrambleString('markov', [5, 3, 1, 4, 2, 0])).toEqual('vkaorm');
  });
})

describe('prime', function() {
  it('return true if its a prime', function() {
    expect(prime(2)).toEqual(true);
  });

  it('return true if its a prime', function() {
    expect(prime(3)).toEqual(true);
  });

  it('return false if it is not a prime', function() {
    expect(prime(4)).toEqual(false);
  });

  it('return false if it is not a prime', function() {
    expect(prime(9)).toEqual(false);
  });
})

describe('palindromo', function() {
  it('Find the longest such string of letters that is a palindrome', function() {
    expect(longestPalindrome('abcbd')).toEqual('bcb');
  });

  it('Find the longest such string of letters that is a palindrome', function() {
    expect(longestPalindrome('abba')).toEqual('abba');
  });

  it('Find the longest such string of letters that is a palindrome', function() {
    expect(longestPalindrome('abcbdeffe')).toEqual('effe');
  });
})

describe('greatest common factor', function() {
  it('Return the greatest integer that evenly divides both numbers', function() {
    expect(greatestCommonFactor(3, 9)).toEqual(3);
  });

  it('Return the greatest integer that evenly divides both numbers', function() {
    expect(greatestCommonFactor(16, 24)).toEqual(8);
  });

  it('Return the greatest integer that evenly divides both numbers', function() {
    expect(greatestCommonFactor(3, 5)).toEqual(1);
  });
})

describe('caesar cipher', function() {
  it('takes a string and a number. the number is the next letter in order from alphabet after z starts with a again', function() {
    expect(caesarCipher(2, 'aabz')).toEqual('ccdb');
  });

  it('takes a string and a number. the number is the next letter in order from alphabet after z starts with a again', function() {
    expect(caesarCipher(3, 'abc')).toEqual('def');
  });

  it('takes a string and a number. the number is the next letter in order from alphabet after z starts with a again', function() {
    expect(caesarCipher(5, 'abc')).toEqual('fgh');
  });
})

describe('number repeats', function() {
  it('returns the number of letters that appear more than once in the string', function() {
    expect(num_repeats('aaa')).toEqual(1);
  });

  it('returns the number of letters that appear more than once in the string', function() {
    expect(num_repeats('abdbc')).toEqual(1);
  });

  it('returns the number of letters that appear more than once in the string', function() {
    expect(num_repeats('abab')).toEqual(2);
  });

  it('returns the number of letters that appear more than once in the string', function() {
    expect(num_repeats('cadac')).toEqual(2);
  });

  it('returns the number of letters that appear more than once in the string', function() {
    expect(num_repeats('abc')).toEqual(0);
  });
})



