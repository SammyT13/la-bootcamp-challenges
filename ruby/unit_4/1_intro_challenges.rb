# Create a variable and return it in a sentence using string interpolation.

name = 'Sammy'

p "Hello my name is #{name}."

# Create a variable that contains a string and test some of the Ruby string methods:

test_string = 'music'

    # .upcase
    p test_string.upcase
    # .reverse
    p test_string.reverse
    # .include?
    p test_string.include?('!')
    p test_string.include?('u')
    # .capitalize
    p test_string.capitalize
    # .delete
    p test_string.delete('ic')
    # .index
    p test_string.index('i')
    # .swapcase
    p test_string.swapcase
# Create an array that contains the name of at least five TV shows you enjoy.
tv_shows = ['Chuck', 'Psych', 'Smallville', 'How I Met Your Mother', 'Invasion']
# Find the length of the array.
p tv_shows.length
# Return the first item in the array.
p tv_shows[0]
# Return the fourth item in the array.
p tv_shows[3]
# Permanently reverse the order of the array.
tv_shows.reverse!
p tv_shows
# Create a new empty array for your top favorite TV shows.
fav_tv_shows = []
p fav_tv_shows
# Using the full TV show array, add your top two favorite shows to the empty array.
fav_tv_shows << 'Chuck'
p fav_tv_shows
fav_tv_shows << 'Psych'
p fav_tv_shows