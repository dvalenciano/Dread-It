const db = require('../db')
const { Post } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const footballArticles = [
    {
      "category": "Football",
      "title": "Mississippi State lands commitment from 2022 DB out of Georgia",
      "image": "./ArticleImages/FootballA1.png",
      "content":
        "The Mississippi State Bulldogs dipped into fellow Bulldog territory to land their latest 2022 commitment. This latest commitment comes via 3-star 2022 CB Audavion Collins, a native of Newton High School in Covington, Georgia. Collins announced his decision on a Twitter stream, picking Mississippi State over Indiana, Tennessee, UCF and Michigan State. Collins is the No. 112 cornerback in the class of 2022 and the No. 106 overall recruit from the state of Georgia. The Bulldogs now have 18 players in their 2022 recruiting class, which currently ranks No.27 in the nation and No.9 in the SEC, per 247Sports."
    },
    {
      "category": "Football",
      "title": "Nick Saban's greatest strength has nothing to do with football",
      "image": "https://www.saturdaydownsouth.com/wp-content/uploads/2021/04/USATSI_15498067-962x536.jpg",
      "content": "Just when it seemed at least plausible that Nick Saban could be passed up by the very aspects of college football he would seem to detest, the Alabama head coach has adapted and will very likely become more successful — if that’s even possible."
    },
    {
      "category": "Football",

      "title": "AP Top 25 Poll Week 1: 5 SEC teams ranked in top 25",
      "image": "https://www.saturdaydownsouth.com/wp-content/uploads/2020/12/APTop25Image-SDS-962x536.jpg",
      "content": "The debut AP Poll for the 2021 college football season was released on Monday at noon. Now that the official rankings are out (after the Coaches Poll was released last week), the debates about who is too high and who is too low can officially begin. We can also start to see which matchups will have major College Football Playoff implications."
    },
    {
      "category": "Football",

      "title": "Bayou to Baton Rouge, Ed Orgeron is the People's King of Louisiana football",
      "image": "https://www.saturdaydownsouth.com/wp-content/uploads/2018/05/M2A0228-962x536.jpg",
      "content": "Nearly overnight, Ed Orgeron became the most popular guy in the state of Louisiana. Fans refer to him as “A Man of the People.” But in some places, it runs much deeper than that. LAROSE, La. — Just before the bayou falls off into the Gulf of Mexico, there lies a sleepy settlement by the name of Larose. At first glance, this town of 7,400 appears languished and worn: The main drawbridge is out, inactive shrimp boats and trawlers have perched their bodies against the banks of the Bayou Lafourche, and FOR LEASE signs are slapped onto the sides of buildings. This morning, the D&D, one of only a handful of eateries, is closed, and the “Cowboys” — a group of coffee-drinking codgers — have slipped out of the Cash Magic diner, a local gathering place where discussions range from Donald Trump to how the world is going to hell in a hand basket. Anything, really."
    },
    {
      "category": "Football",

      "title": "Dan Mullen explains how the Florida secondary is growing alongside budding leader Kaiir Elam",
      "image": "https://s3media.247sports.com/Uploads/Assets/882/590/9590882.jpg",
      "content": "Kaiir Elam was named a second-team All-American by the Associated Press on Monday and is becoming a go-to player in the Florida secondary. Coach Dan Mullen said he has grown more into a leadership role, is a great playmaker, great student and lives up to “The Gator Standard."
    },
    {
      "category": "Football",

      "title": "Tennessee announces COVID-19 procedures for Neyland Stadium attendees",
      "image": "http://footballstadiumdigest.com/wp-content/uploads/2016/10/Neyland-Stadium.jpg",
      "content": "While it remains to be seen just how many Tennessee fans will be attending home games this season, we now know how COVID-19 will affect the faithful at Neyland Stadium."
    },
    {
      "category": "Football",

      "title": "Tennessee promotes new fan experiences at Neyland Stadium this season",
      "image": "https://www.saturdaydownsouth.com/wp-content/uploads/2019/10/USATSI_13468897.jpg",
      "content": "Tennessee will begin its 125th football season and 100th at storied Neyland Stadium on Thursday, Sept. 2, against Bowling Green, and the Volunteers athletics department is doing everything it can to make it a memorable season for the fans from an experience standpoint."
    },
    {
      "category": "Football",

      "title": "Is this working? 2021 best- and worst-case scenarios for MSU",
      "image": "https://www.saturdaydownsouth.com/wp-content/uploads/2021/08/USATSI_15308263-962x536.jpg",
      "content": "In 2021, two coaches removed from Dan Mullen, the Mississippi State fan base could stand to employ more of their famously reasonable expectations and the coaching staff might consider preaching patience."
    }
  ]

  await Post.insertMany(footballArticles)

  console.log('Football articles added')
}
const run = async () => {
  await main()
  db.close()
}

run()
