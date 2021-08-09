# Ticket website 7-days project (wix)

extend and add new features to a simplified ticketing system.
The task's main purpose is to test your ability to learn new topics and deliver high quality digital products. It combines building UI components and a touch of server development as well.

While no previous background is required to complete this task or to apply to this position, we do recommend getting to a basic level on the following subjects:
- JavaScript
- HTML & CSS
- React
- Node.js

## Getting Started
1. Make sure you have *Node.js* 10 or higher and *npm* 6 or higher installed
2. Install the project dependencies by running `npm install` from the project's directory (using a terminal)
3. Run the project by running `npm start`

You should now have the development version running on your computer and accessible via http://localhost:3000

## Tasks

The project is split into 3 parts. The first part is about adding UI functionality. The second part goes a bit broader into the client-server integration and business logic.
The third part is about creativity and good "big-picture" intuition. 

### Part 1 - Ticket item improvements

1a. Our tickets list is only showing the title. Make it show the content as well, as following:  
![content](https://d2x3xhvgiqkx42.cloudfront.net/3d412e82-d97e-487e-b1a3-41a6bd24a05b/b9bd9ddb-c0bf-4b55-888e-747f0d6524c8/2019/09/27/6fec98b0-c9cd-4583-ac9f-eaf8983c4061/6043b7ba-e795-4807-8aca-9f693c0450eb.png)  

# added DisplayContent component

1b.
Some agents can't answer all tickets, and want an option to hide some.
Add a hide button that will hide the tickets from view. Make sure there is an option to restore it as well.
use "Hide" and "Restore" for those buttons respectively.
![hide tickets](https://d2x3xhvgiqkx42.cloudfront.net/3d412e82-d97e-487e-b1a3-41a6bd24a05b/b9bd9ddb-c0bf-4b55-888e-747f0d6524c8/2019/09/27/233c0170-fd67-4fb5-92c1-54de14d71350/b653f595-a0b7-4233-9259-a8b3d8d1d271.gif)

# MY SOLUTION:
I chose to give the option to restore all tickets, or restore all tickets in the current page
current page also depents on search words / strings (as will be explained in part 3)
so for examle, a user can restore all tickets that has the word "tree" in them (content/title)

1c.
 Add a way for users to resize the texts inside the list to 3 states:
`small`, `normal`, `large`

1. Add a new component above the heading with 3 buttons with the following text "small font", "normal font" and "large font"
2. Apply the changes to our list on every click when the default should be normal
3. Make sure you can't choose an already chosen state

# MY SOLUTION
added as a component: FontResizer
button that is selected become disabled


### Part 2 - List functionality

2a. 
 Agents are complaining that our search functionality isn't working properly.
They gave the example that when searching for "wix store", the ticket titled "Search bar for my wix store" (id `6860d043-f551-58c8-84d6-f9e6a8cb0cb2`) is not returned.
Checking the data, that ticket does exist...

1.Add a query param `?search=` to the `/tickets` API call and implement it on the server side.
2.Connect your client side search bar to that API call

# MY SOLUTION
added a param "search" to the api call in "api"
the search param is an array, will explain in part 3
passed it from the "client" side to the server side
in server side, used it to filter tickets

2b. We're showing only 20 tickets but agents can swear there are more. Solve this problem.  
**Keep in mind the number of tickets is planned to grow exponentially very soon so make sure to think of a proper solution.**

# MY SOLUTION
#added another param: page
#used the already written page query
#used the already written paginate tickets
#added a component to client side: PageManager to move to next/previus page and see current page number
#added option to see how many hidden tickets are in the current page and restore all hidden ticket in the current page
#when there are no search results, show a message
#down-side: when: overallNumberOfTicket % pageSize == 0 => the last page will be an empty page (instead of no page). solved at latest version

### Part 3 - Your extra touch
Think of a small addition to this project and make it happen. If you need inspiration, you can check out our real ticketing app at https://wix.com/wixanswers and grab some ideas from there ;)
It should involve adding something to the UI, or server (or both!).
A good rule of thumb for the effort here is that it should not exceed the time that it took you to perform Part 2.  
*Please describe the feature you've added on your email back to us*

# MY SOLUTION:
=== More intuitive search ==== 
I changed the search to be more intuitive by adding option to search by words or strings:
examples:

wix store => get all tickets that has both "wix" and "store" in them (title/content)
"wix store" => get only tickets with the phrase "wix store" in them
fix "wix store" bug "last page is empty" => get ticket that contains the phrases: "fix", "wix store", "bug", "lase page is empty" with no particular order of appearance

I did this change because useally when I search, I write only the search keywords, but sometimes I like to use phrases, and I think most user like to search like that as well

===mark search words/phrases===
I edited my component TicketDisplay, so when a search Input in given by the user, the search words/phrases will be marked in the tickets

I did this becouse I thought the user will like to know why a particular ticket appears when they search

down-side: no highliting special cherecters

*Note:* this step is also mandatory.

## General notes
- Test your work well. Think of edge cases. Think of how users will use it, and make sure your work is of high quality
- Stick to the best practices of the libraries used as much as possible
- This task involves both client and server code. Regardless of bonuses and part 3, in the end you should have touched both areas. If you haven't - you probably are not covering all our requirements.
- If you have any questions regarding the task itself or its environment, feel free to ask in the exam's e-mail. For general coding / technology questions, please consult stack overflow, forums and other sources of your choice.
