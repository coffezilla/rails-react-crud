# require "bigdecimal"
# require "date"

# # string
# user_name = "renato"
# # Good practice: Use meaningful variable names and consistent casing (e.g., snake_case for Ruby).

# # number
# user_age = 20
# # Good practice: Use descriptive variable names like `user_age` if the context isn't clear.

# # rand
# dice_roll = rand(1..6)
# # Good practice: Use `rand(1..6)` for a standard dice roll (1 to 6).

# # float
# money = BigDecimal("12.99")

# # Good practice: Use `BigDecimal` for precise financial calculations to avoid floating-point errors.
# # Example: money = BigDecimal("12.99")

# # boolean
# is_user_admin = true
# # Good practice: Use boolean variables with clear names like `is_owner` or `is_user_admin`.

# # hash
# person = {
#     name: "Renato",
#     age: 20
# }
# # Good practice: Use symbols for hash keys to save memory and improve performance.
# # Example: person = { name: "Renato", age: 20 }

# # date
# # Good practice: Use the `Date` or `Time` class for working with dates.
# # Example: require 'date'; today = Date.today

# my_birthday = Date.today
# puts my_birthday

# # class
# class Person
#     attr_accessor :user_name, :user_age

#     def initialize(user_name = "Default User", user_age = 0)
#         @user_name = user_name
#         @user_age = user_age
#     end

#     def greet()
#         puts "Tamo junto: #{self.user_name} #{self.user_age}"
#     end
# end
# # Good practice: Use meaningful method names like `introduce` instead of `greet`.
# # Example: def introduce; puts "Hello, my name is #{self.username} and I am #{self.age} years old."; end

# person = Person.new
# person.user_name = "Renato"
# person.user_age = 33
# # Good practice: Avoid commented-out code in production. Remove it if not needed.

# # function
# def is_minor(age: Integer); age > 18; end
# # Good practice: Avoid using ternary operators for simple boolean expressions; use direct comparisons.
# # Example: def is_minor(age: Integer); age <= 18; end

# is_user_minor = is_minor(age: 20)
# # Good practice: Avoid commented-out code. Use meaningful variable names like `is_user_minor`.

# # foreach

# # array
# fruits = [
#     "banana",
#     "mango",
#     "apple"
# ]
# # Good practice: Use consistent indentation and avoid trailing commas in arrays unless necessary.

# # map
# fruits.map do |fruit|
#     puts fruit
# end

# # each
# fruits.each {
#     |fruit| puts fruit
# }

# # Good practice: Use `each` instead of `map` if you are not transforming the array.
# # Example: fruits.each { |fruit| puts fruit }

# # filter
# my_favorite_fruits = fruits.filter {
#     |fruit| fruit != "mango"
# }
# # Fixed version: Avoid using `return` inside a block; use the block's implicit return value.
# # Example: my_favorite_fruits = fruits.filter { |fruit| fruit != 'mango' }

# puts my_favorite_fruits

# # while
# clubs = [
#     "atletico",
#     "flamengo",
#     "vasco"
# ]

