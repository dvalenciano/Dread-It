const db = require('../db')
const { Post } = require('../models/')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const boxingArticles = [
    {
      "category": "boxing",
      "title": "De La Hoya Not Interested In Canelo Fight Anymore, Wants Trinidad, Mayweather Rematches Instead",
      "image": "https://www.boxingscene.com/uploads/oscar-de-la-hoya%20(18).jpg",
      "content": "LOS ANGELES — After kickstarting an adamant campaign to fight the superstar he long-promoted, Oscar De La Hoya now has a change of heart on facing Canelo Alvarez as he begins his boxing comeback tour at the age of 48. I changed my mind, De La Hoya told reporters before a media workout promoting his Sept. 11 fight against former UFC champion Vitor Belfort at Staples Center on Triller and FITE pay per view."
            
           
    },
    {
      "category": "boxing",

      "title": "Wilder Will Not Be Looking For One Shot With Fury, Says Sparring Partner",
      "image": "https://www.boxingscene.com/uploads/deontay-wilder-hafey%20(24)_1625084943.jpg",

      "content": "Former heavyweight champion Deontay Wilder will not be looking a single punch in his upcoming trilogy fight with Tyson Fury, according to sparring partner Stephan Shaw. (photo by Ryan Hafey) Back in February of 2020, Fury stopped Wilder in the seventh round to capture the WBC world title. Their trilogy fight will take place on October 9th, at the T-Mobile Arena in Las Vegas. Last year, Wilder parted ways with his longtime co-trainer Mark Breland."
    },
    {
      "category": "boxing",

      "title": "WBA Eliminates Interim Titles Effective Immediately",
      "image": "https://www.boxingscene.com/uploads/wba-belt_2020_10_15_043938.jpg",
      "content": "The number of recognized titlists in the sport is set to dramatically decrease. Making good on its promise of continued reform, the World Boxing Association (WBA) will no longer crown nor recognize “interim” champions within its organization save for extreme circumstances. The order was handed down Wednesday afternoon, less than two weeks after recalling any previously scheduled interim title fight."
        
       
    },
    {
      "category": "boxing",

      "title": "Lomachenko: Everyone is Waiting For Rematch With Lopez - Let's Make It!",
      "image": "https://cdn.vox-cdn.com/thumbor/cmkMhaS-WhgA8UOVjiy4pkV-v5E=/0x0:3000x2132/1200x800/filters:focal(1207x0:1687x480)/cdn.vox-cdn.com/uploads/chorus_image/image/69509882/1280838899.0.jpg",
      "content": "Former three division world champion Vasiliy Lomachenko is looking for payback. Returning for the first time since last October's twelve round decision loss to Teofimo Lopez, Lomachenko beat down and stopped Nakatani in the ninth round of a lightweight main event Saturday at The Theater at Virgin Hotels Las Vegas. Lomachenko (15-2, 11 KOs) faced a hint of adversity when a headbutt opened up a cut in the opening round, but that would be the extent of his troubles. It was one-way traffic throughout, as Nakatani (19-2, 13 KOs) showed an incredibly sturdy chin but little in the way of offense."
    },
    {
      "category": "boxing",

      "title": "Tyson Fury vs Deontay Wilder",
      "image": "https://cdn.vox-cdn.com/thumbor/F3rDo7XF_kVGwJNMJaFEx-pJcP8=/0x0:2978x1907/1400x933/filters:focal(1170x240:1646x716):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69308047/1202740857.0.jpg",
      "content": "Pay-Per-View Event, by ESPN and Fox Sports. In the 10-round co-main event, 2016 Nigerian Olympian “The One and Only” Efe Ajagba will take on fellow unbeaten Frank The Cuban Flash Sánchez. The PPV telecast also includes the 12-round rematch between Finland’s Robert “The Nordic Nightmare” Helenius and Polish star Adam “Babyface” Kownacki, who was stopped by Helenius in the fourth round of their first bout in March 2020. The eight-round PPV opener will see Toledo-born Jared The Real Big Baby Anderson step up in class against undefeated Russian contender Vladimir Tereshkin."
    },
    // {
    //   category: 'boxing',

    //   title: `Joshua Preparing For Usyk's Movement, Plans To Be Trim For The Fight`,
    //   image: `https://www.boxingscene.com/uploads/anthony-joshua%20(3)_2020_12_10_003327.jpg`,
    //   content: `IBF, IBO, WBA, WBO heavyweight champion Anthony Joshua is taking every possible measure in his ongoing training camp, as he prepares for the mandatory defense against Oleksandr Usyk.

    //     Their showdown will take place on September 25 from the Tottenham Hotspur Stadium in London.
        
    //     Usyk, a former undisputed cruiserweight champion, is likely the best natural boxer that Joshua will face.
        
    //     And Joshua admits that Usyk's boxing ability and movement will make him a very difficult opponent.
        
    //     "100 percent, he will be. Movement means you are never stationery to get hit. Movement is important. Concentration - when you want to [punch], you lock in, then make a move. You have to make sure your brain works. That can be mentally fatiguing so I am sharpening the mind so that I can concentrate for the 12 rounds," Joshua said to Sky Sports.
        
    //     "Also I practice having the ability to [punch] four times, not just once. It's a fight for the brain. Knowing what you've got in front of you and knowing how to deal with it. You can either be aggressive, corner [him], throw everything at it. Or take your time, be clever, then knock [him] out."
        
    //     Joshua is not training for a knockout - and he's not training for size.
        
    //     He wants to be quick with his punches and have the proper stamina to last the full distance.
        
    //     "I'm looking trim for this fight. I'm fighting a guy who is a 12-round fighter. So it would be silly of me to go in there bulky with my muscles screaming for oxygen," Joshua said.
        
    //     "I've been training like a 15-round fighter in this camp. I will be well-conditioned to fight. That is key. What happens when I train that way? My body adapts and takes its natural form. This is the form it has taken."`
    // },
    // {
    //   category: 'boxing',

    //   title: `Muhammad Ali's Place in Boxing History`,
    //   image: `https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2016/06/04/Web-Resampled/2016-06-04/1368864311465001651-kCMG--606x404@wp.com.jpg?t=20170517`,
    //   content: `How would Muhammad Ali Rate?

    //     How would Ali fare against other Great Heavyweights? This is one question that sends boxing fans into a tether. Many of the older pundits don’t rate Ali as high as younger pundits. My own bias was that Ali was the greatest Heavyweights but there were other great fighters of the past could easily give Ali a close matches. I will be honest to admit that much of my admiration for Ali was that I grew up in the Ali era. Others such as boxing historian Tracy Callis rate others higher.
        
    //     Ali vs. Louis
        
    //     Ali was the unorthodox fighter who rarely hit to the body, kept his hand low, moved straight back and near the end of the career, Ali would fall back into the ropes. On the other hand, Joe Louis was the most technically sound heavyweight. If you wanted to make a film on how to box, Joe Louis would be the fighter you would want to film.
        
    //     Ali’s advantage was his hand and foot speed and most importantly, his ability to withstand punishment- often an underrated feature of his repertoire. Louis advantage was his hand speed, technical skills and punishing body attack. In a fight between the two, Ali speed would have proved decisive. Louis had trouble against good boxers as Jersey Walcott showed in his two fights and Billy Conn did in his first fight. However, Louis could take Ali best shots and force Ali to go distance. Since Louis rarely cut, Ali’s jab would hit their target but there is little probability that Ali would cut Louis up. I could see Louis winning simply because he could easily take advantage of Ali unorthodox style and when he had a fighter in trouble, he ended their misery. I still favor Ali but the case could be made for Louis.
        
    //     Ali vs. Marciano and Tyson
        
    //     Most pundits today would rate Ali as an easy victor or Marciano, however this may not be the case. Marciano did not have the hand speed of Tyson or Frazier but he did have one punch knock out. Marciano’s strength was that he was one of best-conditioned fighters and he would get stronger as the fight wore on. On this score, Marciano was similar to Frazier, who also gained strength as the fighter went on. Ali could take Marciano best and his foot and hand speed would allow him to stay out of Marciano range thus allowing him to avoid many of Marciano sledgehammer punches. Marciano, like Frazier, would have the staying power to maintain pressure throughout the fight. Frazier showed that Ali could be pressured from a swarming style that Frazier and Marciano possessed. The one disadvantage that Marciano had as oppose to Frazier was that he cut easier. Ezzard Charles cut up Marciano badly in their second fight and Ali’s jab could be just as decisive.
        
    //     Of the three fighters, Tyson may have had the most talent and he was the classic peek a boo fighter. He could jab and knock out an opponent with either hand. At his peak, he could penetrate bigger fighters defenses and score. Tyson also had underestimated defensive skills and may have been harder to hit in the earlier rounds than either Frazier or Marciano. What Tyson did not have was Marciano or Frazier endurance. He did not gain strength as a fight wore on and when he fought upper elite fighters, he could not close the show early. This failure to close the show cost him against Douglas, Holyfield and Lewis. By the time Tyson hit 24, he was on the downside of the career. At 26, Frazier would beat Ali and be at his peak and Marciano went toe to toe with Ezzard Charles at the age of 30. So Tyson ability to pursue Ali for an entire fight would not compare to Frazier or Marciano. And Tyson character flaws ended his championship era sooner that what it should have been.
        
    //     Ali vs. Jim Jefferies
        
    //     Ali showed that he could handle bigger and stronger heavyweights. Liston and Foreman were Ali signature victories. Two of the heavy punchers in Heavyweight history, neither Liston nor Foreman could deal with Ali’s guile or hand speed. Jim Jefferies was unusual fighter for he was a big man who could crouch and swarm similar to Frazier or Marciano. Most boxing historians remember Jefferies for his lost to Jack Johnson and many have placed him below Johnson because of that fight. When Jefferies fought Johnson, he had been out of the ring for six years.
        
    //     It is difficult to judge the older fighters at the turn of the century due to rule changes. Fighters were not required to go to a neutral corner and matches were marathons that could last for hours. The other disadvantage was that films featuring older fighters are not as easily available; whereas one could easily get a copy of almost every Ali fight, especially his championship fights. Endurance and strategy played an important role. Jefferies, at his peak, was a killing machine who could outlast and out punch his opponent. He defeated Tom Sharkey with one arm in a classic 25 round fight and Sharkey was the turn of the century version of Rocky Marciano. He defeated Gentleman Jim Corbett twice even though in their first match, Corbett won most of the rounds according to many pundits of their day. Corbett once commented, “I won 22 out of 22 rounds but it was the 23rd that cost me the fight.” Jefferies endurance proved decisive as he outlasted Corbett and knocked out the slick boxer.
        
    //     I would favor Ali because his hand speed and ability to take punishment. Of course the rules would matter along with ring size. Of course this would be true against all of these fighters. Jefferies at his peak would challenge Ali for unlike Liston or Foreman, Jefferies would not run out of gas. Others like Tracy Callis would have picked Jefferies. For many of today boxing pundits, Jefferies is a forgotten champion but he was the dominant heavyweight at the turn of the century. He was a big heavyweight for his era and his size would still be a factor today.
        
    //     Ali vs. Lennox Lewis
        
    //     Forget about the weight or size. For one, Lewis fought in an era that athletes were naturally bigger due to diet and in some cases, steroids. At the beginning of Lewis career, he fought at 225 pounds and Ali would not have given up much in size to the younger Lewis. Lewis had excellent jab and great right hand. Ali advantage was that his foot and hand speed would be superior to Lewis.
        
    //     Ali fought bigger fighters such as Ernie Terrell even though Lewis was superior to Terrell. Ali easily defeated Terrell and basically ended his career. Ali could handle the bigger boxers of his era and Lewis showed susceptibility to a right hand- one of Ali’s favorite weapons. And Ali did defeat the great fighters of his era. Against Sonny Liston, Joe Frazier and George Foreman, Ali was 5-1 with four stoppages. Ali beat the best fighters of his era and all of these fighters were at the peak or considered at their peak. Lewis defeated two of the best fighters of his generation in Holyfield and Tyson, even though some have argued that both fighters were past their peak. Of course, Lewis himself was past 34 years of age when he fought both. Lewis, however, maintained a high caliber of skills even in his late 30’s unlike Ali, who was essentially a shot fighter after he fought Frazier for a third time.
        
    //     Ali vs. Holmes
        
    //     This fight would be intriguing. Forget the fight that actually occurred between these two. Ali had not fought for two years and was long past his prime. Holmes easily beat Ali that night but in their peak, it would be different. Holmes’ jab would give Ali trouble similar to the trouble that Ali faced with Ken Norton jabs. Ali, on the other hand, could score with his right over Holmes jab and his own jab would be quicker. It would be a jabbing contest with both fighters almost a mirror of one another. Ali would prevail but a close decision.
        
    //     Summary
        
    //     Great fighters had to be able to defeat fighters of different styles. Joe Louis was able to find a way to beat the slick Billy Conn and he fought five fights with fighters who weighed over 240 pounds and ranged between 6’4” and 6’6” and he won all of these fights by knock out.
        
    //     Jefferies, and Marciano handled the boxers of their era and Frazier handled all but one- Ali. Frazier weakness was that he could not handle bigger stronger fighters since he would be moving forward into their power reach as the Foreman fight demonstrated. Marciano never fought a Foreman and I suspect that the result would be no different if he fought Foreman. Tyson never wanted anything to do with an older Foreman, so at least Tyson understood his style weakness. Jefferies was unlike other bigger sluggers since he had more endurance and appeared to more elusive.
        
    //     Ali often won on guile and smarts as he did with skills. After the first Frazier fight, Ali no longer had the same skills as he did before he was forced into boxing exile due to his draft status. When Ali beat Foreman, he beat Foreman on smarts more than skills. He unveiled the rope-a-dope and allowed Foreman to tire himself out while counter punching off the rope. This strategy only worked because Ali quickness and ability to take punches. Most fighters would have been demolished by using such a strategy. Joe Frazier tried this strategy in his second fight with Foreman. It only delayed the inevitable.
        
    //     Ali had the most trouble with the swarmers such as Frazier and even boxers such as Jimmy Young gave the Great One trouble. On the other hand, big sluggers were mere targets for Ali quick hand. So style makes fights and some fighters have more trouble with some styles over others. Frazier fared better against Ali than he did against Foreman. To decide who is the best is subjective. The one advantage that Ali had over most fighters was not his hand and foot speed but is ability to absorb punishment. Most of Ali’s memorable fights occurred after he came back from boxing exile and after the third Frazier fight, Ali was a mere shell of himself. Even though he stayed a champion for three more years, he was an old fighter at the age of 33. The Frazier trilogy and the “Rumble in the Jungle took their tolls and in the fights after the third Frazier fight, Ali was fighting more on guile than skills. He cleaned out the division but by the time he survived Earnie Shavers, he was an exhausted force. His next two fights with Leon Spinks showed Ali to be an old fighter before his time.
        
    //     Jefferies quit before he hit 30 and when he came back at 35, he was a spent force with six years rust. At the age of 36, Holmes lost to Michael Spinks but then Spinks was one of the best pound for pound fighters in the 80’s. Holmes came back after his retirement and proved to be competitive with many excellent fighters of the early 90’s past the age of 40. The only fighter who truly humiliated Holmes was Tyson, who slaughtered a 38 years old Holmes in four rounds. The only fighter on this list who was in fact still a great fighter past the age of 35 was Lennox Lewis.
        
    //     Ali greatness can be judge not just by his skills but by the number of victories in championship fights. Only Joe Louis won more heavyweight championship fights than Ali. Ali fought in the deepest era of heavyweight fighters and thus this record becomes even more impressive when you review the fighters that he had to defeat to stay on top. The late 60’s and the 70’s were the deepest era and the two eras that would be close was at the turn of the century when Jefferies dominated and during the 90’s when Lewis competed against Tyson and Holyfield.
        
    //     Ali was more than just a fighter for he became a political symbol outside the ring and his impact was felt throughout the entire society. Very few fighters could claim a similar impact. There were no other fighters whose impact was similar outside the ring with the exception of one- Joe Louis.`
    // },
    // {
    //   category: 'boxing',

    //   title: `Report: Canelo-Plant Reach Terms For Historic Undisputed Super Middleweight Championship Clash`,
    //   image: `https://image-cdn.essentiallysports.com/wp-content/uploads/BDDNDEJEJR4.png`,
    //   content: `UPDATE [4:00 P.M. ET]: Saul 'Canelo' Alvarez has since confirmed the bout is set for November 6 at MGM Grand Garden Arena in Las Vegas.

    //     Boxing is now closer than ever to crowning its first-ever undisputed super middleweight champion.
        
    //     BoxingScene.com has learned that Saul ‘Canelo’ Alvarez and Caleb Plant are in the advanced stages of finalizing all terms for a desired four-belt super middleweight showdown. As first reported by ESPN.com’s Mike Coppinger, sources with knowledge of such talks indicate that both sides have agreed on all major points surrounding the bout which will headline a Pay-Per-View event eyed for November.
        
    //     Additional terms have yet to be revealed, regarding Alvarez’s commitment to PBC or even a specified location. According to the ESPN report, the deal in place only calls for one fight between Alvarez and PBC although with the potential for future business together given PBC’s roster of super middleweight talent.
        
    //     For now, the priority is getting this fight over the line—which is not yet official at least until formally announced by Alvarez, whose Canelo Promotions will serve as among the lead promoters for the event.
        
    //     The bout is rumored to land in Las Vegas, though a venue has not yet been specified.
        
    //     Allegiant Stadium—home to the NFL’s Las Vegas Raiders—is booked on Nov. 6, Nov. 13 and Nov. 20. T-Mobile Arena—home to the NHL’s Vegas Golden Knights and also where Alvarez has previously appeared on five occasions—is booked on Nov. 6 and Nov. 13, while Nov. 20 is an open date for the annual NCAA Roman Main Event college basketball tournament that takes place Nov. 19 and Nov. 21. MGM Grand Garden Arena is open Nov. 6 and Nov. 13 but is booked on Nov. 20.
        
    //     Should the fight land in Vegas, it will mark Alvarez’s first fight in the boxing capital since his Nov. 2019 eleventh-round knockout of Sergey Kovalev to win the WBO light heavyweight title at MGM Grand.
        
    //     Guadalajara’s Alvarez (56-1-2, 38KOs) and Plant (21-0, 12KOs)—a native of Ashland City, Tennessee who now lives and trains in Las Vegas—were previously in talks for a targeted September 18 date at MGM Grand in Las Vegas. A deal was believed to have been reached before negotiations quickly went south at the eleventh hour. It was decided by Alvarez that more time was needed, thus walking away from previous plans to fight on the Saturday surrounding Mexican Independence Day. With that decision comes the third consecutive year that Alvarez will not fight on the prominent Mexican holiday weekend.
        
    //     Still, the sport’s pound-for-pound king remains the most active elite fighter in the sport as this will mark his third in 2021 and fourth overall in less than a year.
        
    //     Alvarez was out for more than thirteen months following a nasty and very public divorce with Golden Boy Promotions following a ten-year working relationship. The two parties went their separate ways last November, with Alvarez having spent his last three fights aligned with Eddie Hearn’s Matchroom Boxing outfit beginning with his twelve-round, unanimous decision win over then-unbeaten WBA “Super” 168-pound titlist Callum Smith last December in San Antonio. Alvarez—a four-division champion—also netted the vacant WBC super middleweight title, whose mandatory he satisfied following a third-round stoppage of Istanbul’s Avni Yildirim this past February in Miami Gardens, Florida.
        
    //     Both bouts aired live on DAZN, as did his WBO title-winning eighth-round injury stoppage of unbeaten Billy Joe Saunders. The bout took place in front of the largest-ever U.S. indoor crowd for a boxing event, selling 66,065 tickets for their May 8 title unification bout at AT&T Stadium in Arlington, Texas.
        
    //     The win over Saunders marked the sixth straight appearance on DAZN for Alvarez dating back to his third-round knockout of Rocky Fielding in his December 2018 platform debut.
        
    //     The fight with Plant will mark Alvarez’s first on PPV since his majority decision win over Gennadiy Golovkin in their September 2018 middleweight championship rematch. The bout took place at T-Mobile Arena, as did their first fight exactly 52 weeks prior which ended in a disputed twelve-round, split decision draw. Both fights did big business, producing a combined $51,533,350 in ticket sales—good for the third and fourth largest live gates in the history of boxing in the state of Nevada.
        
    //     Both fights also cracked the one million PPV buy threshold, generating more than $210,000,000 in PPV revenue between the two events. The rematch sold a reported 1,100,000 PPV buys, the last U.S.-based boxing event to sell more than one million units. Alvarez also sold a reported 1,000,000 PPV buys for his twelve-round shutout of Julio Cesar Chavez Jr. in May 2017 preceding the two fights with Golovkin. The rematch left Alvarez as the reigning middleweight champion as well as just the third fighter in the 21st Century—and the first since Floyd Mayweather in 2012—to headline three consecutive PPV events in the U.S. selling one million or more buys.
        
    //     The best performing boxing PPV events in the U.S. since Alvarez’s market exit have both featured exhibition bouts in the headlining act. Mike Tyson and Roy Jones generated a reported 1,600,000 buys for their eight-round exhibition atop a Triller PPV show in Los Angeles last November, while Floyd Mayweather and Logan Paul reportedly sold 1,000,000 buys for their fake fight which headlined a Showtime PPV event this past June in Miami Gardens, Florida.
        
    //     Among sanctioned pro bouts topping a PPV telecast, the best performing event post-Canelo came last February. The rematch between Tyson Fury and Deontay Wilder generated north of $68,000,000 in PPV as the main event of a show jointly produced and distributed by ESPN+ and Fox Sports.
        
    //     Alvarez not only has the chance to reinvigorate the market but also make history for the super middleweight division. He is currently just the second boxer in divisional history to hold three of the four major titles, joining Hall-of-Fame former two-division champ Joe Calzaghe on that exclusive list. The division has never had an undisputed champion in either three- or four-belt era.
        
    //     Calzaghe is the only fighter in the division to have won all four major titles. He was forced to vacate the IBF belt prior to his April 2007 title defense versus Peter Manfredo, retaining the WBO title. Calzaghe became the lineal champion along with dethroning WBA/WBC titlist Mikkel Kessler later that November before moving up to light heavyweight to finish his career.
        
    //     Plant enters the fight attempting the fourth defense of the IBF belt he claimed in a twelve-round, unanimous decision win over Jose Uzcategui in January 2019. The bout topped the inaugural installment of PBC’s renewed series on FS1, serving as the network’s most watched boxing match.
        
    //     The unbeaten super middleweight celebrated his two-year anniversary with his most recent win, a twelve-round shutout of former titlist Caleb Truax this past January in Los Angeles. The bout aired live on Fox, as did preceding title defending knockout wins over Mike Lee (July 2019) and Vincent Feigenbutz (February 2020) for Plant, who will make far and away his biggest career payday in the upcoming showdown with Alvarez.`
    // },
    // {
    //   category: 'boxing',

    //   title: `Mike Tyson in A Boy Band?`,
    //   image: `https://i2.wp.com/www.gosports.com.my/wp-content/uploads/2020/10/Mike-Tyson.jpg?fit=980%2C551&ssl=1`,
    //   content: `By Mark Vester

    //   Say it so. According to several media reports, former heavyweight champion Mike Tyson is desperate to record a song with Irish boy band Westlife and has already contacted their manager Louis Walsh to make it happen. Tyson is willing to have his voice digitally enhanced in order to record with the stars.
      
    //   Band member Brian McFadden left the group and Tyson wants to fill the spot.
      
    //    "He loves their music so much he wants to be part of it. He's not a Pavarotti or Domingo - but neither are the members of Westlife. Mike's asked me to make contact with Louis Walsh to set the wheels in motion. He'd be happy just to sing on the chorus of a track, but he could always replace Brian McFadden,"  Irish boxing star Joe Egan said.
      
    //   A spokesman for the band says, "This sounds really interesting. The band are all fans of Tyson."`
    // }
  ]
  await Post.insertMany(boxingArticles)
  console.log('Soccer Articles added to db')
}
const run = async () => {
  await main()
  db.close()
}

run()
