## User Stories

🐿️ As a user, I want to be able to create new posts and add them to the page

🐿️ As a user, I want to be able to assign a category to each post

🐿️ As a user, I want to be able to view all posts added on the page and the category they're in

🐿️ As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category (Stretch Goal)

🐿️ As a user, I want to be able to add new categories (Stretch Goal)

## Requirements

Make in the order:

Database (Supabase),

Server (Express),

Client (React)

** Remember to create 2 folders in your project root. One named "server" and one named "client". **

🎯 Design a database schema with relationships between tables

🎯 Create a new application with a React client and an Express server
(again, remember the client and the server should be separate)

🎯 Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file. (if you use the Supabase editor, save the scripts you run in a file in your project, in case you need to rerun them, or we need to duplicate the project)

🎯 Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application.

🎯 Create multiple pages using react-router-dom

🎯 Create a home page.

🎯 Create a page to show all the posts and use fetch to call your server to get your data.

🎯 Create a page where users can create new posts using a form.

## Stretch Goals

🏹 Allow users to "Like" posts and increase the likes

🏹 Allow users to DELETE posts

🏹 Allow users to filter posts in a specific category. Use either a query string like /posts?category=education or a dedicated route for the categories at /posts/:categoryName.

## Reflection Goals

🎯 Please mention the requirements you met and which goals you achieved for this assignment.

🎯 Were there any requirements or goals that you were not quite able to achieve?

🎯 If so, could you please tell us what was it that you found difficult about these tasks?

# My Reflection

Setting up the database, client and server I didn’t struggle with. I feel like i’ve got a good understanding of this.
Using drawsql I tried to plan how my databases would work and talk to each other. I originally had a Users table but as discussed with Tim he said it was best that my username was to just go in my messages table and have the track names in the categories and link those tables. I really struggled with understanding the links between these 2 tables and at one point I just made a cat_name in my messages table the same as I had in my categories table but in doing this I realised I wouldn’t have a JOIN in my server.js file, although it did work and was referencing the cat_name in my category table. After a lot of trial and error I finally managed to link the cat_id column in my messages table to link with the id column in my categories table, a lot of it came down to how my form was inputting data but I do believe now it is doing what is expected to complete the assignment as for each entry in the form the cat_id in my messages table is the same as the id relating to the track (cat_name) picked from the categories table.
I will add some screenshots of the tables in supabase to show they are referencing each other. (ReadMe-Images folder)

I did a lot of the work originally in the supabase sql editor but as time went on I changed lots of things directly through the tables, mainly to try and make sense of what works and why so I have tried to amend the sql’s I made to show my end result, I did run some of them and they worked. I was reluctant to delete cat_name from my messages table, I know it now fills with Null but ultimately I didn’t want it to break my app, although it shouldn’t I think it still holds some value from the previous reviews I had inputed and hopefully shows where I was originally trying to go to make things work.
After struggling with the react-router-dom with Routes and Route during the week making silly mistakes, I feel I learned from them as this week I had no issues, i was able to create the paths with the elements I need and imported links with the correct paths to make sure they render the correct pages I needed.

I did create a home page but it was mainly just to keep my App.jsx looking clean. I simply just populated it with an image and used a Route path to show the element as the first page you see when you open app.

I called my post page Messages.jsx where I used fetch to get all the data from my table to display in here although I didn’t struggle with this as I used ThunderClient to check my end points the real struggle came when I attempted to do my filter. I made another component and called that into my Messages.jsx to keep the code clean in the hope I would better understand it. I originally got this to work with buttons after looking over the dynamic routes and query strings workshop we did earlier in the week, my main issue was really trying to get use the useSearchParams but with a lot of trial and error I managed to get it working. However once I saw the buttons on the page I really didn’t like it, so I attempted to use the drop down again with options changing the onClick to onSelect and in the select tag using the onChange to call the filter function I had made but this didn’t work! I couldn’t understand why it would work for buttons but not for this drop down but thanks to some rubber ducking with cohorts I had noticed I hadn’t put .target.value in the function and as soon as I had added this it worked.

In my form I originally had a lot of option tags but I thought if you added another track it would mean you would have to add another one of these option tags everywhere so instead I mapped through my categories table to show the track names instead as for future proofing I thought if a new row is added in the table it would automatically add to the drop down of the options mapped. I thought I would struggle with this a lot more than I did but I did keep referring back to where we had mapped our shopAPi from the cookie clicker assignment to help and once I had done it I used the same idea in my messages page for the filter.

STRETCH GOALS:

The filter I have explained above but what also helped was looking at how we had used filters in our group assignment.

I managed to get the delete button working, I had some struggles initially as it kept returning me it in an uncaught promise but this was due to the fact I had the method in all upper case and not lower case. After resolving that when you used the delete button it didn’t work instantaneous, you had to refresh the page for the message to be deleted, it took some time to make it work instantly but i realised I needed another if() return null; to make this happen. My only issue I have with the delete button is it feels like its not needed as I don’t want anybody being able to delete a message simply because they don’t like it but I guess we will learn over the next couple of week how to make it so only the user who posted it can delete it. So I did this to try and complete a stretch goal.

creating a new category I thought would be easy, but for me it wasn’t as my category table had issues with the serial primary id not being set as an identity for some reason, so I had to manually do this myself inside supabase, from here I forgot to call my handleSubmit in a function which in return just cost me time and issues but Jake pointed it out to me that is what was stopping it from working.

I didn’t get the opportunity to do a like button/counter for the messages left, so it's something I will attempt in the future as I would quite like to use the put method to attempt this. The only reason I didn't get the oppertunity is simply because I just ran out of time 😞
