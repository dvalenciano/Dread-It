const db = require('../db')
const { FootballArticle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const footballArticles = [
    {
      category: `Football`,
      title: 'Mississippi State lands commitment from 2022 DB out of Georgia',
      image: './ArticleImages/FootballA1.png',
      content:
        'The Mississippi State Bulldogs dipped into fellow Bulldog territory to land their latest 2022 commitment. This latest commitment comes via 3-star 2022 CB Audavion Collins, a native of Newton High School in Covington, Georgia. Collins announced his decision on a Twitter stream, picking Mississippi State over Indiana, Tennessee, UCF and Michigan State. Collins is the No. 112 cornerback in the class of 2022 and the No. 106 overall recruit from the state of Georgia. The Bulldogs now have 18 players in their 2022 recruiting class, which currently ranks No.27 in the nation and No.9 in the SEC, per 247Sports.'
    },
    {
      category: 'Football',
      title: `Nick Saban's greatest strength has nothing to do with football`,
      image: `https://www.saturdaydownsouth.com/wp-content/uploads/2021/04/USATSI_15498067-962x536.jpg`,
      content: `Just when it seemed at least plausible that Nick Saban could be passed up by the very aspects of college football he would seem to detest, the Alabama head coach has adapted and will very likely become more successful — if that’s even possible.

      Saban has already overcome changes that didn’t exactly sit well with the Alabama head coach. Saban didn’t like the hurry-up offense so he adjusted. Saban has showcased some explosive offenses recently that have fatigued his defense. No matter; the Tide have the depth and have upped their conditioning and substitution on defense to handle the constant pressure.
      
      Speaking of offense, Saban used to love a ball control attack. If there was any knock on Saban in his early championship run, it was that he could be a little too conservative in the second half with a lead on his side. That’s not Saban any longer. His offense has proven that it can score with the best of them.
      
      Saban’s also adjusted to college football’s Early Signing Period. Most would have thought Saban would hate such a drastic change to the college football calendar. After all, Saban was doing just fine as it was. Saban simply soldiered on through the change and turned it into a positive for Alabama. That took intelligence, guile and adaptability, but that was just the beginning.
      
      With the Early Signing Period, the Crimson Tide can now secure the foundation of its class while not having to worry about vultures trying to pick it apart. And after the first wave of prospects have signed, Alabama can focus on some late, blue-chip additions that only elevate the class.
      
      Saban’s latest ability to refine his coaching approach may be his most impressive. Saban treats the transfer portal as if it is the chocolate fountain at a Sunday brunch. Does he need it? Not really. Is he full of talent before he even gets to the point of being tempted by just a little more? No, Saban is gluttonous when it comes to having elite talent on his roster. The transfer portal has only helped Saban despite it being about the most non-traditonal aspect of football since tie games were eliminated.
      
      Just or not, college football players were supposed to have zero leverage. If you didn’t like playing at a particular school, too bad. The National Letter of Intent was once a one-way street that seemed to suit Saban and other coaches. After all, players once had to sit out a season, possibly pay for their own school for a year and be influenced by their original school as to where they could end up. Remember when “releasing” a transfer was a thing? That now seems archaic.
      
      Saban would run off players who couldn’t stand him or the years of waiting before they could become productive contributors. On the surface, all of the recent changes in college football would seemingly undermine Saban’s approach. With an open-door policy, surely Alabama would lose talented underclassmen who wanted to see the field immediately. That has happened on occasion with players like quarterback Jalen Hurts and running back Alvin Kamara who went elsewhere and had success. However, transfers haven’t stopped Saban nor kept him from staying on the cutting edge. Just look at training camp this season.
      
      Alabama has picked up 2 key players from its rivals. Henry To’o To’o showed flashes for Tennessee before having his fill of unprepared coaching. He’s now at Alabama. The Crimson Tide doesn’t need any insight from the former Vol to beat Tennessee. They just got a potentially great player who once was on the opposite sideline.
      
      To’o To’o is competing — and holding his own — with one of the best group of linebackers Saban has ever had. Saban coveted To’o To’o in the recruiting process. Nothing changed after a slight stopover in Knoxville.
      
      “When we recruited him out of high school, we thought he was an outstanding player, a fine young man (with) a great family, great leadership qualities,” Saban said in a recent interview on The Next Round. “He certainly didn’t disappoint in the years that we saw him play at Tennessee, so we were excited to get a guy like that.”
      
      Saban has another former elite prospect that was in need of a scenery change. Receiver Jameson Williams made the move from Ohio State and is making a strong impact during preseason practice.
      
      “(Jameson) Williams is a guy that’s really made a big impact in this camp,” Saban said via 247Sports.
      
      Saban doesn’t need any help scouting upcoming opponents, but To’oto’o and Williams can provide some insight into personnel for the Tennessee game and a potential College Football Playoff matchup with Ohio State.
      
      “Maybe my perspective on this is a little different. Having been in pro football and dealing with free agency … the transfer portal, in a way, creates an opportunity for you to bring players to your team other than recruiting, a lot like free agency does,” Saban said.
      
      Saban isn’t just filling out his roster with malcontents from other schools for the sake of filling up his scholarship numbers. Through his research with his vast network of coaches at other schools, Saban is finding positive, impactful additions to his program. Saban is making his team better in a most non-traditional way. And we don’t even need to discuss how he’s managed the influx of money from the NCAA’s decision to allow prospects to profit on their name, likeness and image. He’s adapted to that, too.
      
      Like the transfer portal, Saban has managed to make NLI funds a reason to go to Alabama. He didn’t accidentally mention that one of his players had about $1 million in endorsements by accident at SEC Media Days. That was yet another selling point for his program.
      
      On the surface, all of the recent changes would have seemed to derail Saban considering his old-school approach. Nope. Instead, the changes have shown Saban’s true genius: his adaptability.`
    },
    {
      category: 'Football',

      title: `AP Top 25 Poll Week 1: 5 SEC teams ranked in top 25`,
      image: `https://www.saturdaydownsouth.com/wp-content/uploads/2020/12/APTop25Image-SDS-962x536.jpg`,
      content: `The debut AP Poll for the 2021 college football season was released on Monday at noon.

        Now that the official rankings are out (after the Coaches Poll was released last week), the debates about who is too high and who is too low can officially begin. We can also start to see which matchups will have major College Football Playoff implications.
        
        Alabama checks in at No. 1, followed by Oklahoma, Clemson, Ohio State and Georgia in the top 5. Five SEC teams — Alabama, Georgia, Texas A&M, Florida and LSU — crack the top 25. Ole Miss and Auburn are among those receiving votes.
        
        Here’s what the preseason AP Poll top 25 looks like:
        
        AP Preseason Poll
        #1 Alabama
        #2 Oklahoma
        #3 Clemson
        #4 Ohio State
        #5 Georgia
        #6 Texas A&M
        #7 Iowa State
        #8 Cincinnati
        #9 Notre Dame
        #10 North Carolina
        #11 Oregon
        #12 Wisconsin
        #13 Florida
        #14 Miami
        #15 USC
        #16 LSU
        #17 Indiana
        #18 Iowa
        #19 Penn State
        #20 Washington
        #21 Texas
        #22 Coastal Carolina
        #23 Louisiana
        #24 Utah
        #25 Arizona State
        Also receiving votes: Oklahoma State 107, Ole Miss 106, TCU 40, Liberty 36, Auburn 32, North Carolina State 14, Michigan 12, Northwestern 8, Boise State 7, Nevada 7, Brigham Young 6, Ball State 6, Houston 5, Boston College 5, UCF 5, West Virginia 3, UAB 2, Army 2, UCLA 2`
    },
    {
      category: 'Football',

      title: `Bayou to Baton Rouge, Ed Orgeron is the People's King of Louisiana football`,
      image: `https://www.saturdaydownsouth.com/wp-content/uploads/2018/05/M2A0228-962x536.jpg`,
      content: `Nearly overnight, Ed Orgeron became the most popular guy in the state of Louisiana. Fans refer to him as “A Man of the People.” But in some places, it runs much deeper than that.
        LAROSE, La. — Just before the bayou falls off into the Gulf of Mexico, there lies a sleepy settlement by the name of Larose. At first glance, this town of 7,400 appears languished and worn: The main drawbridge is out, inactive shrimp boats and trawlers have perched their bodies against the banks of the Bayou Lafourche, and FOR LEASE signs are slapped onto the sides of buildings. This morning, the D&D, one of only a handful of eateries, is closed, and the “Cowboys” — a group of coffee-drinking codgers — have slipped out of the Cash Magic diner, a local gathering place where discussions range from Donald Trump to how the world is going to hell in a hand basket. Anything, really.
        
        One of the signs of life occurs at the The Crab Station, a boutique riverside restaurant owned by Michael Bailleaux, a jolly, portly man today patrolling the premises in a grimy T-shirt and galoshes, a cigarette frequently housed on his lip. Besides being the proprietor of this joint, Michael is a self-professed LSU fanatic and Ed Orgeron fan, unashamed in his disdain for LSU’s former coach and his current team.
        
        “I want him to beat Nick Saban so bad this year,” Bailleaux says of Orgeron between gritted teeth, his accent patently Cajun. “I don’t like Alabama.” Life is like this in Larose. Severe. Hardscrabble. Residents eking out a living through good old-fashioned hard work and cold beer on the weekends. This is a town that works with its hands — industry is built largely around shipping and shrimping — and plays hard (as Bailleaux’s co-worker, Rachel, says, “we don’t need much to convince us to party”). Yet, like much of Louisiana, Larose is a town of faith, a sort of cool Catholicism that doesn’t fret over minor rebellions. Regardless of the doubters, it just keeps plugging and chugging along.

        One hundred and fifty miles away, Larose’s favorite son is being led into a much different venue by a squadron of beefy handlers. Le Pavilion, a posh, chandeliered banquet hall in Lafayette, is hosting tonight’s version of the “Tiger Tour” — a pricey dinner (rumor has it tables go for $2,000) for LSU boosters, the main attraction none other than Ed Orgeron himself.
        
        Coach O, suntanned and hopped up on gumbo and energy drinks, works the room like an empathetic populist, greeting adorers with hugs and bro-shakes, posing for pictures with fans who, for a moment, lust for a Rasputin-like intrigue into the royal court. Nearby, a row of ladies clad in purple-and-gold knit shirts hawk their Tiger wares on one end of the room (kids’ onesies go for $35), while a buffet replete with boudin balls, meat pies, and crawfish etouffee, stretches out on the other. On either side of the dais, as a backdrop, two massive screens play LSU highlights set to rap music.
        
        In Louisiana, a unipolar state where LSU football solely reigns, Orgeron is as well-liked as they come. If, hypothetically, Coach O ran for political office, choosing a moniker would be simple — “Man of the People” — since it already is. Last season, he ingratiated himself with the media, the fans, and the players, and it is beyond evident that most of the Boot is pulling for him to succeed.
        
        But there is a problem. The Legend of Larose
        Edward “Ba Ba” Orgeron Sr. was not a man of great physical dimensions, but he held big dreams for his young son, Ed. Perhaps vicariously, Orgeron Sr. ushered his son to a football life, as he and his wife CoCo hosted games in the back yard. “He was a leader,” coach Ed Orgeron told SDS, speaking of his father. “He was a little man, never played sports, but he was like our coach.”
        
        While many of the other youngsters would retreat to select patches of the bayou in their spare time, young Orgeron’s time was spent in gridiron pursuits. “(My dad) wouldn’t let me hunt, wouldn’t let me fish — just football,” Orgeron said. “All of the neighbors would come over and we’d play from seven ’til twelve and go eat. Then we’d come back and play until they called us in to supper.” Orgeron remembers his father as a very good cook; the pots of gumbo that came as a reward for a long day on the turf were memories that remain fondest in his mind.
        
        Although the senior Orgeron possessed only a night school education, he was street smart, worldly. If anything, he taught his son to compete, and in Lafourche Parish, there was plenty of competition to go around. “You got your butt whipped,” Orgeron reflects. “We weren’t pressing re-start on the Madden game. Our high school had a tremendous tradition.”
        
        Bryan Arceneaux, who grew up a mile from Orgerons, played high school football with Ed at South Lafourche High School in nearby Galliano, where sellout stadiums were the norm. “He just didn’t know when to quit,” Arceneaux said. “It was mean. It was tough. It was no quit. He would bust your ass.” A well-rounded athlete, Orgeron also played basketball and threw discus and shot put on the track team. Kevin Gros, the owner and operator of offshore supply vessels in the Gulf of Mexico, played high school sports with Orgeron and describes him as “very intense.”

        “In football, if I got a chance to get a lick on him, I would. Then he’d get mad and hit me three times. He’d get lower than me and say, ‘You got enough?’ After the third time, I got enough,” Gros told SDS.
        
        Plenty tough, Orgeron was always moving, always challenging, always motivated. He took on all comers, wasn’t scared of anybody. And, like many residents, Orgeron developed a survivalist mentality that the bayou often required between its severe marshes and tributaries. As only a few families had any wealth, Orgeron worked odd jobs to help his family, digging ditches, shoveling shrimp in a shrimp shed for $5/hour, and planting grass on the Grand Isle Beach.
        
        Then boasting a bouffant 1970s butt-cut that bordered on a mullet, Orgeron was popular in school, but according to some, was known as more of a jokester than a heartthrob. Joanne, a pot cook at the Cash Magic diner who went to high school with Orgeron, described him as “nice,” going on to say, “he always made people laugh. His friends were all good fellas. I always liked him.”
        
        Orgeron and company ran in packs, and as life in a small town was molasses-slow, it wasn’t uncommon for the rowdy group to pass the time by chasing girls, chugging a few beers, or shooting pool. Though the Cajun lifestyle did not discourage these pursuits, it was clear that Ed’s dream was to play and coach football.
        
        Everyone seemed to have nicknames back then. Orgeron, known as “Bebe” (the accent on the second “Be” — ba-BAY), played at South Lafourche for coach Ralph Pere, affectionately known as “Big Red.” “Coach Pere was my idol, and I grew up wanting to be like the guys I watched playing for the Tarpons,” Orgeron once told The Daily Comet. Wearing number 77, Orgeron flew all over the field as a defenseman for the Tarpons, otherwise known as “Big Blue.” With only 34 players on the roster, South Lafourche won the state championship in 1977, but lost in the state semifinals Orgeron’s senior year. A complement to Orgeron’s menacing D was the smooth arm of quarterback Bobby Hebert, who went on to NFL glory with the Saints and Falcons. In the spring of ’79, Orgeron signed with LSU.

        After only a short time Baton Rouge, Orgeron became disillusioned and homesick. He returned home to Larose and began working on the side of the road with his dad for the phone company. Things might have continued that way had old pal Bobby Hebert not lured him to sign with Northwestern State in Natchitoches, four hours away, the following fall.
        
        At NSU, Orgeron lettered for three seasons at defensive lineman. His exploits legendary, Orgeron was known on the field as the fireplug for the Demon defense, and off it, a raucous college kid who liked to have a good time.
        
        A Coaching Life
        Parlaying a successful playing career into coaching, Orgeron in 1984 became a graduate assistant at NSU — a move that commenced a labyrinthine vocational life that somehow, remarkably, snaked its way back to Baton Rouge in the fall of 2015.
        
        An early anecdote of his coaching career demonstrates the leadership in his bones. Once as a graduate assistant, Orgeron was called to give a motivational speech, to which he agreed. After the team gathered around, Orgeron began to tell a story of two fishermen. “Two guys were going fishing on a cold winter day,” Orgeron began. “They are sitting on a riverbank with a bucket between them. One guy’s catching fish, and the other guy ain’t catching no fish. So he asks the other guy, ‘What’s going on here? We’ve got the same pole, same line, same cork, same hook. Using the same worms. But I’m not catching no fish. I’m putting my line right next to yours.’ The other man said, ‘Well, let me tell you something. I do whatever it takes to feed my family.'”
        
        Then to underscore his point, Orgeron reached into his mouth and pulled out a worm. And he says, “I warm mine before I put it on a hook.”
        
        “He had the worm the whole time he was telling that speech,” Kevin Gros recalled. “Ed Orgeron had that worm in his mouth! … He could motivate a statue.” After Northwestern State, Orgeron made stops at McNeese State, Arkansas, Miami, Nicholls State, Syracuse, USC, Ole Miss, New Orleans Saints, Tennessee and USC (again), falling under the tutelage of coaching mentors Ken Hatfield, Jimmy Johnson, Paul Pasqualoni and Pete Carroll.

        At each stop, Orgeron placed a nugget in his pan, mining for coaching gold, learning about every phase and nuance of the game. From Hatfield, he learned to break down film. From Johnson, how to coach. From Pasqualoni, hard work. From Carroll, overall coaching philosophy.
        
        “I think all the coaching that I do today is either from Jimmy Johnson or Pete Carroll, two of the greatest coaches I ever had,” Orgeron said. “Pete Pasqualoni was an excellent football coach and that’s where I learned early recruiting.”
        
        After years of lessons, Orgeron shed the lifelong assistant tag in 2005 when he became he head coach of the Ole Miss Rebels, replacing David Cutcliffe. Orgeron’s stint was nothing short of disastrous, as the Rebels went 10-25 and won only three conference games. On Nov. 24, 2007, Orgeron was fired by athletic director Pete Boone.
        
        Orgeron then sought haven back in Louisiana, becoming the defensive line coach for the New Orleans Saints and coach Sean Payton. In 2009, he was hired by University of Tennessee coach Lane Kiffin to multiple duties, and when Kiffin bolted for USC the following year, Orgeron followed. Coaching the defensive line and coordinating Trojan recruiting, O helped USC regain prominence in the post-Carroll doldrums.
        
        [mid-article-ad]
        
        During the USC years, Orgeron suffered two of the greatest losses of his career, one on the field and one in his personal life. Smack dab in the middle of the 2011 season, Orgeron’s father — the man who had once lit a fire inside of him for football — died at the age of 70. Riven with grief, Orgeron steeled himself for the following week’s game against Notre Dame, and on a chilly night in South Bend, the Trojans defense held the Fighting Irish to 41 yards rushing en route to a 31-17 victory. But in 2013, after an embarrassing loss to Arizona State, Kiffin was canned (in all places, an airport) and Orgeron received his first “interim” badge. Tasked with righting the ship, Orgeron led the Trojans to a 6-2 mark in the final eight games. Thinking he would get the opportunity to lead the Trojans more formally the next season, Orgeron was passed over for the head coaching job when USC athletic director Pat Haden plucked Steve Sarkisian from the University of Washington’s grip.

        “The most humbling experience was when I didn’t win at Ole Miss and I didn’t get the job at USC and the carpet was pulled out from under me,” Orgeron said.
        
        Reflecting on this era, his getting passed over, Orgeron once told the Los Angeles Times, “Besides the death of my father, that was the worst thing that had ever happened to me.”
        
        But like a soldier banished from a battlefield, he accepted his fate and did what he knew best: He returned home. After some soul searching and good eatin’, Orgeron, not one to remain on the canvas for long, soon recovered. That determination learned from his father long ago in the mucky Larose fields continued to serve him well; he got off his haunches and lived to fight another day as the assistant coach at LSU under Les Miles. As fate had it, a year later, he would become the head coach.
        
        After a bleak beginning in 2016, Miles was removed from his station and Orgeron was promoted to interim coach. Searching for a permanent hire across the balance of the fall, LSU flirted with hot candidates Jimbo Fisher and Tom Herman, but in the end, presented the job to Orgeron on Nov. 26.
        
        The O We Know
        Within the state of Louisiana, Orgeron elicits tremendous confidence from the fans. While some remain skeptical, by and large, they believe he is going to succeed. Outside of the borders of Louisiana, however, opinions aren’t as kind. Perhaps his unanticipated jumps and landings might lead a casual observer to conclude that Orgeron has simply been at the right place at the right time, that luck or careful opportunist positioning has helped Orgeron — more so than skill or ability — to gain the positions he’s held. Or, perhaps Orgeron’s failure to shed himself from close associations with coaching drama has prevented him from garnering the national respect that he deserves. And finally, perhaps his time at Ole Miss is too much of a black mark on his resume to convince the pundits that things will be different, that he’s sort of “figured things out” this second time around.

        Some fan bases believe Orgeron is like the perpetual B actor who isn’t quite ready for a lead role. Either way, Orgeron’s hiring at LSU after Miles’ exodus was not met with tremendous fear by — let’s just say it — Alabama fans.
        
        Further, opposing fans might erroneously conclude that Orgeron is a sort of growling blockhead, a cartoonish caricature, and might not possess the chops to handle such a job as L-S-U. But this assessment is significantly unfair. Is he tremendously polished? No. But Orgeron is no dummy. Like his father, he possesses street smarts. He’s a fighter. A competitor. In ways, he seems to be the Coach With Nine Lives. When he gets knocked down, he gets back up. When Ole Miss hit him in the side with a hook, he shimmied and went to the Saints. When USC hit him with an uppercut, he spun and landed at LSU. Say what you want, but the guy’s got something within him that just won’t quit.

        Most of Orgeron’s lifelong buddies have stories to tell about Orgeron’s infectious personality, competitive nature and hyper-intensity. To them, he’s the Legend of Larose.
        
        There’s the one where, as a groomsman, Orgeron was so jacked up for the wedding that he scared the priest. John Fallbacher (nicknamed “Johnny Squat”), who played with Orgeron at Northwestern State, shares a tale that bundles the themes of O’s friendship, loyalty, and tenacity:
        
        “When we used to go places, we’d see one another 30, 40 feet away. The first thing we do … he’d get on all fours, and I’d get on all fours. And we’d go at it. BAM! Wherever we were. Restaurants, weddings, anything. We’d sit there and just bang! Bang! Keep hitting. We’d have knots, bruises, cuts. We’d just keep pounding, pounding.
        
        “And that’s how his life was. You don’t come against him. He’s going to wear you out. And he’s not going to stop. He’s someone you want in your foxhole. You get emotional talking about him. If you needed him, he was there anytime. Day, night. You call him, he’s coming. And when he comes, it’s like a bull. Everybody better get out the way.”
        
        The Problem
        When Joe Alleva hired Ed Orgeron as the 32nd head football coach in LSU history, he knew fans would expect him to defeat the 30th head coach in LSU history. And if there was a common word spoken at the Lafayette event, here’s a hint: It started with the letter A and ended with letter A.
        
        Jordy Hultberg, a former basketball player for Dale Brown turned radio and TV personality, suggests that the litmus test for Orgeron — or any LSU coach for that matter— is whether he can beat Alabama. “You’ve got to win, but you’ve got to beat Alabama,” Hultberg told SDS. “It’s been six years now.” Ray Maloney, a Baton Rouge resident and LSU season ticket holder since the 1960s, echoes that sentiment. “LSU fans think about beating Alabama constantly, constantly. Ad nauseum,” Maloney says.

        Kevin Maloney, Ray’s son who is attending the Lafayette event with his father, believes Orgeron will. “Coach O’s going to get him,” Kevin says.
        
        Sure, they’ll talk about the quarterback situation and the impact of the hires of Matt Canada and Dave Aranda at these events. But the focus is beating Saban and Alabama. To win the West, LSU believes it will have to exorcise the demons that have unwelcomingly arrived for the past six games with the Crimson Tide.
        
        If it’s any indication of what might happen, the campus is stoked. Dietz Miller, a junior at LSU attending the Tiger Tour with his father, relays the campus excitement after Orgeron’s hire. “Everyone loves him,” Dietz says.
        
        Miller’s father, Joe, believes LSU needed a change. “I’ve always been on the Miles train, but things were getting a tad old.”
        
        Alleva, who spent 10 years at Duke and was the athletic supervisor who navigated the tumultuous Duke Lacrosse case, felt a shift of energy when Orgeron took over for Miles.
        
        “As soon as he got the job, he changed the whole dynamics and culture of the football building, not just the players, but with the whole staff,” Alleva told SDS. “It was contagious. His energy and passion for what he does just permeated the whole building. I’m really pleased and proud of the culture he’s developing for this program. He’s honest and he’s truthful and he’s down to earth. He’s a good man, good principles. He’s just the kind of guy you want to play for.”
        
        The Solution
        So what will be different for Orgeron this time? First, he is going to let his coaches coach. He’s not going to micromanage as he did at Ole Miss. “Well, here’s the thing. I learned I couldn’t do it all myself,” Orgeron said. “I should have been smart enough to let them coach.”
        
        Next, he believes that practice should be intense but short. His philosophy is that players shouldn’t tire from slogging through long practices; they should expend their energy in games. Orgeron has taken inventory of his strengths and weaknesses, and he will continue to do what he’s always done well: recruit. As he visits high schools and homes from Thibodeaux to Tallulah to Tickfaw, Orgeron will be pitching development. He’ll tell them he’s one of them, a full-blooded Louisianan who came home after touring the world. He’ll talk about all the fun they’ll have in Baton Rouge, and the opportunities to experience a winning culture. People will admit: Les Miles, with all his quirks and foibles, was a pretty darn good football coach. Speculators believe he was fired because it was simply time for a change. But to say that the LSU fans, the athletic director, and anyone who has campus authority in Baton Rouge, doesn’t want Orgeron to perform better than Miles just isn’t true.

        The expectations on Orgeron are huge. Gone are the days of the rebuilding years of the 1990s, the Hallman/DiNardo mediocrity, because, like him or not, the 30th coach in LSU history set standards for which subsequent LSU coaches must meet.
        
        If Orgeron has the confidence of anyone, it’s Alleva. “I think that he has tremendous experience,” Alleva said. “He learned form his mistakes. He’ll be the first to tell you that he made mistakes at Ole Miss and incorporated what he learned at Southern Cal and brought all of that experience to us now.”
        
        Behind the gritty façade, the sound bites and the coachspeak, the Marvel-comic-like aura, Orgeron is a deeply analytical man who has negotiated the trying moments of his life by turning to his faith. “(Faith) has been a huge part for the last 18 years,” Orgeron said. “You grow on a yearly basis. Obviously I still have a lot of things to work on, but I consider several pastors my mentors. We try to go to church every Sunday; with my schedule I can’t. But I think everybody needs something to lean on, some spiritual background.”
        
        The maturation process has left him unworried about pressure or critics. “You want to talk about pressure? Be the interim coach at LSU,” he told SDS. “There are always going to be critics. You’re not going to win every game. I don’t care what other people think, man. They ain’t been in my shoes. Everybody’s got to walk their own path. I’m the one that gets up every morning and goes to work. I’m the one who wants to feed my family.” During his introductory press conference, Orgeron revealed this poignant side when he mentioned his mother and father. A brief silence permeated the room as O fought back tears and pounded his fist on the podium in emotion.

        Standing in a restaurant inside a hotel casino in Lake Charles at one of the Tiger Tour events, Orgeron expounded on this moment. “Number one, for my mother and my father, for me to be the head coach at LSU would have been utopia, more than they could ever dream about,” he said. “When I saw them raise me, I saw them work very hard and I saw them make a lot of sacrifices. I grew up a rich man in their home. We weren’t rich by no means. But they gave me all I needed to have the success I have in life.
        
        “I think my dad dying at an early age of 70, he would have loved to have this time with his grandchildren. His grandchildren looked up to him; my wife was very close to my father and we had a great relationship with my mom and dad. It would have been a dream come true for him to walk into Tiger Stadium.” A Town Proud to Call Him Their Own
        Back at The Crab Station in Larose, Rachel says that the town is brimming with excitement over the hire of Orgeron. “Oh, he’s the topic of many conversations,” she says. “Coach O is a lot of the gossip around here. Everybody’s super excited. Small towns like this, anything like that comes out of it, you can’t help but be excited.” Jason, an offshore boat captain, says, “I’ve been rooting for Ed for a while … you can’t imagine the camaraderie down here, how much they are so behind him.”

        Back in February, the city honored Orgeron with “Coach O Day” at the Larose Civic Center, where over 1,500 people were jammed. On a rainy night, Orgeron’s number was retired and a number of dignitaries spoke, including Bobby Hebert and former Louisiana Governor Edwin Edwards. Among the attendees was LSU Heisman Trophy winner Billy Cannon. In a city still reeling from an economic downturn, the event was a shot in the arm. At first glance, the town appears languished and worn, but for Orgeron, Larose is swelling with pride.
        
        “It’s not often anything like that happens down here,” Joanne at Cash Magic says. “The town loves it. Every place they go, that’s all anyone talks about. It’s a big deal. We’re proud of him.”
        
        Arceneaux agrees. “This area supported him from the time he walked on campus even as an assistant,” he said. “But when he was given the opportunity, it was like this whole community came together like I’ve never seen. This community backed him one hundred percent. I didn’t meet one person who said something negative about his opportunity.”
        
        Bailleaux leans against the tailgate of his truck, a ribbon of smoke twisting into the Larose air. Behind him, live crabs are pulled up from an icy cooler on a conveyor belt. One even waddles across the floor. “I think he’s going to do very good. He’s a good coach; he’s bringing a lot of talent with him. He did good last year!” Bailleaux says, his voice rising to a Frenchy crescendo.
        
        Orgeron’s lifelong friend, “Johnny Squat,” said everybody has been asking him how Coach O is going to do.
        
        “He’s gonna make LSU back, title contenders every year,'” John Fallbacher says. “His coaching ability, his intentness. The people that he’ll bring in that he believes in, they’re all going to buy in to him, they believe in him. And the players believe in him. … He’s got that motivation, that aura about him.
        
        “He’s going to prove you wrong. … He’s not going to take defeat at anything.
        
        “He’s going to bring LSU back to the Charlie McClendon days. LSU was everything in the South, in Louisiana. It was the biggest thing. Ed’s going to bring it back. There’s no doubt. There’s too much talent at LSU. There’s too much support, and he will not give up until it happens.” It means something when the local kid grows up and makes something of his life. When the boy who used to run the fields grows up to be a man of which a place can be proud. But this is especially true if he comes from a small town.

        Like most of the citizens of Larose, Orgeron embodies what it means to be a Cajun. Hard-working. Loves to eat. Loves to have a good time. Would give you the shirt off his back. He’s one of them. Yes, he’s a man of the people. Larose people. As the saying goes, “He’s the first LSU coach in a long time who doesn’t have an accent.”
        
        But for Larose, it’s much deeper than that. Orgeron evokes a feeling. It’s something you see in the eyes of Michael Bailleaux, hear in the voice of Joanne from Cash Magic.
        
        Hope.`
    },
    {
      category: 'Football',

      title: `Dan Mullen explains how the Florida secondary is growing alongside budding leader Kaiir Elam`,
      image: `https://s3media.247sports.com/Uploads/Assets/882/590/9590882.jpg`,
      content: `Kaiir Elam was named a second-team All-American by the Associated Press on Monday and is becoming a go-to player in the Florida secondary.

        Coach Dan Mullen said he has grown more into a leadership role, is a great playmaker, great student and lives up to “The Gator Standard.”
        
        “He’s a guy that’s very conscientious, does things the right way, takes care of his business” Mullen said. “But now he has an opportunity to realize, ‘Hey, I’m the veteran older guy’ even though it doesn’t seem like he’s been here forever. ‘I’m the older veteran guy and I’ve got to be a leader and he’s bought in to that role as well.”
        
        Mullen previously said the secondary is one unit that might keep him up at night. That’s because outside of Elam, there is little meaningful experience.
        
        Elam last year started all 12 games at cornerback and finished his sophomore campaign with 39 tackles, 2 interceptions, 11 pass breakups and one fumble recovery.
        
        “They’ve grown up a little bit, but there’s a lot of scenarios guys haven’t been in,” Mullen said of the other defensive backs. “There’s a bunch of guys in the secondary that haven’t been in scenarios. Kaiir’s been in situations, Trey Dean’s been in situations, Rashad Torrence’s been in situations, Tre’vez Johnson’s been in some situations. None of the other guys have really been in those situations before.”`
    },
    {
      category: 'Football',

      title: `Tennessee announces COVID-19 procedures for Neyland Stadium attendees`,
      image: `http://footballstadiumdigest.com/wp-content/uploads/2016/10/Neyland-Stadium.jpg`,
      content: `While it remains to be seen just how many Tennessee fans will be attending home games this season, we now know how COVID-19 will affect the faithful at Neyland Stadium.

        The answer? Not very much.
        
        Tennessee announced on Wednesday that there will be no mask or proof-of-vaccine requirements for fans attending games this fall. There is an ongoing debate worldwide as to the next step to fight off the COVID-19 pandemic. Some schools will require masks and possibly proof of vaccination to be allowed to attend public events.

        Neyland Stadium can seat over 100,000 fans but that seems unlikely at any point this season. Along with COVID, attendance could be affected by a team with historically low expectations.
        
        The Vols host Bowling Green to open the season on Sept. 2. In order to boost attendance, UT has announced that student tickets will come with a “buddy” pass. It remains to be seen if the “buddy” pass will still be in effect during the remainder of the home schedule when the Vols host Pittsburgh, Tennessee Tech, South Carolina, Ole Miss, Georgia, South Alabama and Vanderbilt.`
    },
    {
      category: 'Football',

      title: `Tennessee promotes new fan experiences at Neyland Stadium this season`,
      image: `https://www.saturdaydownsouth.com/wp-content/uploads/2019/10/USATSI_13468897.jpg`,
      content: `Tennessee will begin its 125th football season and 100th at storied Neyland Stadium on Thursday, Sept. 2, against Bowling Green, and the Volunteers athletics department is doing everything it can to make it a memorable season for the fans from an experience standpoint.

        “We have some new gameday elements in store to welcome our fans back,” Vice Chancellor/Director of Athletics Danny White announced on Wednesday. “We’ll continue to evaluate our gameday experience, seek fan feedback and identify opportunities to enhance the way things look, sound and feel while still honoring the traditions and pageantry that make fall Saturdays on Rocky Top so unique.”
        
        Highlighting the changes for 2021 will be a new LED lighting system that is in the final stages of implementation, which will be used for pre-game and in-game light shows.
        
        An enhanced fireworks display will also be incorporated into the game-day atmosphere to celebrate Tennessee scoring plays and victories.
        
        Outside of Gate 9, Tennessee will host Truly’s Tailgate, which will open several hours before kickoff and provide fans with food and drink throughout the game. Additionally, former Vol Sterling Henton, who’s now known as DJ “Sterl The Pearl” will be mixing tunes at Truly’s before the game and then taking his energetic act to the field level during the game.`
    },
    {
      category: 'Football',

      title: `Is this working? 2021 best- and worst-case scenarios for MSU`,
      image: `https://www.saturdaydownsouth.com/wp-content/uploads/2021/08/USATSI_15308263-962x536.jpg`,
      content: `In 2021, two coaches removed from Dan Mullen, the Mississippi State fan base could stand to employ more of their famously reasonable expectations and the coaching staff might consider preaching patience.

        No one who gets paid to have college football opinions expects the Bulldogs to compete for a trip to Atlanta and the SEC championship in 2021. That doesn’t mean they won’t exceed national expectations in Mike Leach’s second year.
        
        That said, I can’t, with a straight face, write that 10-2 is possible. It isn’t. The program is undergoing a big shift and unlike the mega programs, it will take time.
        
        So, how high or low could they really go?
        
        Here are 3 best-case and worst-case scenarios for the 2021 MSU squad.
        
        Nightmare scenario: Mike Leach retires amid a poor performance
        Unlikely.
        
        In this scenario, the record does not matter. It could be a 1-6 start; it could be a 4-8 season. If Leach, for whatever reason, no longer feels he can get the job done at MSU or want to coach football at all, the program could tailspin.
        
        In 1988, Leach coached community college football in the not-fun part of the SoCal desert, then in 1989, he coached in freakin’ Finland. The man loves coaching football.
        
        But say the fan base starts to expect similar results to the 2014-15 glory years. And say his best players are getting Mississippi-famous making money selling their NIL, and say he just feels tired. Can’t you see him retiring back to the mountains of Wyoming?
        
        ESPN ranked Mississippi State 110 out of 130 in their program stability rankings which are based on coaching staff turnover, roster turnover, and success against expectations.
        
        Having a coach quit after just 2 seasons could undo everything Dan Mullen built.
        
        Pipe dream scenario: 9-3, Outback Bowl
        Theoretically possible.
        
        Even with Dak Prescott at QB and NFLers all over the field, MSU never beat Ole Miss, Alabama and LSU in the same season. This year, the Bulldogs get all 3 teams at Davis Wade Stadium. If they can pull off two of those wins — one against Ole Miss and the other against whomever —  there’s a path to 9-3, counting losses to Texas A&M and Auburn.
        
        Mississippi State, like clockwork, will have a handful of players that most fans and pundits won’t mention in conversation, but of whom the NFL is very much aware.
        
        This year those guys are OL Charles Cross and DB Martin Emerson. Both will have chances to start early on in their careers in the NFL.
        
        Mississippi State also has a confidence-building schedule. This can be a high-risk, high-reward scenario. But games against always-annoying NC State and pesky Memphis are a perfect swag ramp to the first conference game on Sept. 25 when LSU visits.
        
        Finally, the 2021 cross-division rotational game is at Vanderbilt, probably the worst team in the SEC. Even though it’s just one game, it matters for the Bulldogs to take wins where they come.
        
        Should Leach and company pull this off, the hype train will be off and running toward an appearance in the Outback Bowl against whichever Big Ten team gets smashed by Ohio State and Penn State; my guess is Michigan.
        
        Rock-bottom scenario: 2-10, no SEC wins
        Unlikely.
        
        Mississippi State fans would be right to question the Mike Leach approach if they failed to win an SEC game while also falling to NC State and Memphis.
        
        Part of being a vulnerable or rebuilding program is that other teams look at you as a possible big win for them, too. If you’re Vanderbilt looking at your schedule heading into this season, Mississippi State is one you’ve got circled. The same could be said of Memphis and Kentucky. Obviously Ole Miss has this game circled. This is to say nothing of the fact the NC State has an early opportunity to punch the SEC right in the mouth.
        
        Even if this is how it goes, Bulldogs fans ought to stay the course. This kind of offense, along with Ole Miss, will take time to grow in the SEC. Leach has won, and disrupted everything, in the Big 12 and the Pac-12, but it took time.
        
        This-is-working scenario: Offensive life
        Possible.
        
        Proof that the high-flying offense is working and proof that the players are syncing up with coaching would make the record irrelevant here.
        
        If fans don’t see their squad make it to the postseason, but they see an infuriated Nick Saban after giving up 40 or a befuddled Lane Kiffin after hanging 50 on Ole Miss, there is reason to celebrate.
        
        The thing that makes Mississippi State a scary place for Leach is that unlike at Washington State or Texas Tech, MSU has NFL-caliber defenders year-in and year-out. Whereas those previous Leach programs didn’t have defensive talent such as Darius Slay, Benardrick McKinney, Chris Jones, etc.
        
        To prove that this is working, the offense needs to figure it out. In 2020, the Bulldogs managed 2 touchdowns or fewer in 6 SEC games, including being shut out against Alabama and mustering just 2 points against Kentucky.
        
        This-isn’t-working scenario: Offensive death
        Possible.
        
        For years, the SEC hung its hat on how much better the teams were defensively compared with teams from other conferences. Those fan bases, usually Texan in nature, would point out that this was just because SEC schools didn’t have to face high-flying offenses.
        
        With Alabama’s offensive revolution, Lane Kiffin’s emergence in the division, and Mike Leach coming to town, that isn’t true.
        
        Understandably, Alabama is in its own category of recruiting and coaching prowess. However, the sobering fact for State fans ought to be that Kiffin’s Rebels were able to figure it out immediately, dropping big numbers on multiple opponents in 2020.
        
        Should MSU not be able to average more than 25 points per SEC game in 2021, it could be time to panic in Starkville.
        
        Ruin-their-year scenario: Upsetting a Playoff-hopeful team
        Likely.
        
        Egg Bowl aside, if a team with Playoff aspirations is at home watching the SEC Championship because they have a loss to Mississippi State, the Bulldogs can rejoice.
        
        Playing spoiler is only a silver lining in most circumstances. However, for this squad, the meaning is a bit deeper.
        
        Should Mississippi State waltz into Texas and knock off a top-5 Aggies team, the message is clear — the Bulldogs are relevant again. That kind of win leaves recruits thinking, “If they only had me, they’d be a 10-win team,” which is right where you want to be heading into 2022.
        
        The likely candidate feels like Texas A&M. The Aggies still have the skeleton of their Big 12 roots defensively. Secondly, the Bulldogs come to town right between the Southwestern Classic against Arkansas in Dallas and a huge game at home against Alabama.`
    },
    {
      category: 'Football',

      title: `Mike Leach talks improved running game, OL ahead of scrimmage`,
      image: `https://cdispatch.com/wp-content/uploads/2021/04/Walley-MSU-1024x683.jpg`,
      content: `Mike Leach sees Mississippi State having an improved running game this season, and the next time he can measure improvement comes in Saturday’s scrimmage.

        Leach said that he’s looking for steady improvement.
        
        “Then was we go into Mock Game Week, where all the periods are the same as game week, then we have to make some decisions,” Leach said. “We’d like to be in a good position to do that. Have a good crisp, well-executed scrimmage.”
        
        Asked about the running game, Leach sees an improvement from last season.
        
        “We utilize it all the time,” he said. “I think it will be effective. We’ve gotten better up front, we’ve gotten better at running back, and we did in the course of the season.”
        
        One of those players in the mix in the running game is offensive lineman Charles Cross.
        
        “Well, he was good last year, I thought,” Leach said. “But he’s bigger now, faster now, and also has a lot more reps. The off-season is a big part of that. Last year, we didn’t have much of an off-season. We didn’t have the first off-season – you didn’t have spring. And we sorta had a second off-season, and sorta would be generous. The off-seasons are really important and I think that’s helped elevate us too.”
        
        Leach also described what a successful scrimmage would be, and it’s competitive at every level.
        
        “Execution on both sides of the ball, which pretty much means both sides are pissed, because they would have liked more plays…would have like to be more explosive…more success on their side of the ball,” Leach said. “Competitive, dynamic consistent play, that isn’t streaky or in spurts.”`
    },
    {
      category: 'Football',

      title: `Ole Miss lands midnight commitment from mammoth in-state offensive tackle`,
      image: `https://cdn.vox-cdn.com/thumbor/Ua2jNUEi-J57eOwo5U5qXjy6nLk=/0x0:2999x1687/1200x800/filters:focal(1261x605:1739x1083)/cdn.vox-cdn.com/uploads/chorus_image/image/69772358/25d4209b_c217_44a7_9af2_0c5b5ea2f879_Bryson_Hurst__1_.0.jpeg`,
      content: `Ole Miss picked up a commitment from Bryson Hurst, a 6-foot-6 and 320 pounder out of Gautier, Mississippi, a midnight pickup for the Rebels on Wednesday morning as the Rebels bolster their 2022 class.

        Hurst is the No. 8 player in the state of Mississippi in this class, and the No. 30 offensive tackle, according to the 247Sports Composite. He has a reported 14 offers.
        
        Hurst took unofficial visits this summer to Starkville and Tallahassee, but he spent most of his time in Oxford. The final visit was with his mother and it seemingly sealed the deal for Kiffin and Ole Miss, Red Cup Rebellion reported.
        
        Hurst is the third offensive lineman recruit to commit to the Rebels, and he was recruited by offensive line coach Jake Thornton and cornerbacks coach Terrell Buckley.`
    }
  ]

  await FootballArticle.insertMany(footballArticles)

  console.log('Football articles added')
}
const run = async () => {
  await main()
  db.close()
}

run()
