# ❤️ Challenges
# Create a method called sum_these_numbers which takes two integers as an argument and prints their sum to the screen.

def sum_these_numbers(num1, num2)
    return num1 + num2
end

p sum_these_numbers(5,6)

# Create a method called is_even, which takes a single integer, and which then returns true if the number is even, and false otherwise.

def is_even num
    if num%2 == 0
        true
    else
        false
    end
end

p is_even(10)
p is_even(11)

# Create a method that takes a number as an argument and prints "Valid" if the number is between 1 and 10 (inclusive) and "Invalid" otherwise.

def num_check num
    if num <=10 && num >=1
        p 'Valid'
    else
        p 'Invalid'
    end
end

num_check(1)
num_check(-5)
num_check(5)
num_check(10)
num_check(11)

# Create a method that takes in a string and determines if the string is a palindrome.

def is_palindrome word
    if word == word.reverse
        "#{word.capitalize} is a palindrome."
    else
        "#{word.capitalize} is not a palindrome."
    end
end

p is_palindrome('Hello')
p is_palindrome('civic')

# ✂️ Challenge: Rock, Paper, Scissors

# As the first user, I can see a prompt in the terminal to enter my name.

p 'Player one, please enter your name'

player1 = gets.chomp

p "Hello #{player1}!"

# As the second user, I can see a prompt in the terminal to enter my name.

p 'Player two, please enter your name'

player2 = gets.chomp

p "Hello #{player2}!"

# As the first user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".
p "#{player1} please choose from rock, paper, or scissors:"

player1_choice = gets.chomp

# As the second user, I can see a prompt in the terminal asking me to type either "rock", "paper", or "scissors".

p "#{player2} please choose from rock, paper, or scissors:"

player2_choice = gets.chomp

# As a user, I can see a message in the terminal depicting which user won the round.
# As a user, I can see a message in the terminal noting if there was a tie.

def rps_winner(p_one,p_two,p1_choice,p2_choice)
    if p1_choice == p2_choice
        p "#{p_one} and #{p_two} are tied!"
    elsif p1_choice == 'rock' && p2_choice == 'scissors'
        p "#{p_one} is the winner!"
    elsif p1_choice == 'paper' && p2_choice == 'scissors'
        p "#{p_two} is the winner!"
    elsif p1_choice == 'scissors' && p2_choice == 'rock'
        p "#{p_two} is the winner!"
    elsif p1_choice == 'paper' && p2_choice == 'rock'
        p "#{p_one} is the winner!"
    elsif p1_choice == 'scissors' && p2_choice == 'paper'
        p "#{p_one} is the winner!"
    elsif p1_choice == 'rock' && p2_choice == 'paper'
        p "#{p_two} is the winner!"
    end
end

rps_winner(player1, player2, player1_choice, player2_choice)
