const db = require('../db').default
const { SoccerArticle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const soccerArticles = [
    {
      category: 'Soccer',

      title: `Carli Lloyd says USWNT needed to struggle to realize it’s time to pass the baton`,
      image: `https://ca-times.brightspotcdn.com/dims4/default/635e36c/2147483647/strip/true/crop/2917x1945+0+0/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fc9%2Ffd%2F25a0440e4575a5b8a3ea9762bbca%2Ftokyo-olympics-soccer-44016.jpg`,
      content: `Hello and welcome to the L.A. Times soccer newsletter. I’m Kevin Baxter, the Times’ soccer writer, and as you read this, I should be 36,000 feet over the Pacific and winging my way back from the Tokyo Olympics.

            The COVID Games were my fourth Olympics and the first I covered in which there were no fans. Face masks were ubiquitous, everyone was required to use hand sanitizer in copious quantities before entering a building, there was regular coronavirus testing and social distancing was strictly enforced at most venues.
            
            The players felt the differences too.
            
            “This whole tournament has been about adapting,” USWNT veteran Carli Lloyd said. “No fans. Can’t leave the hotel. Stand 10 feet from [the media]. Everybody’s in the same boat.”
            
            The tournament almost certainly marked the last competitive international event for Lloyd. She and Megan Rapinoe dropped hints multiple times that more than a decade and half of sweat and sacrifice was enough. And with the next Women’s World Cup two years away, Lloyd is anxious to start spending time with her husband and family, with whom she recently reconciled after years of estrangement.
            
            “It’s always kind of been in the back of my mind,” she said of retirement. “But I’ve always wanted to be the one to dictate that, not media and not coaches.”
            
            A better coda for a spectacular career would have included a gold medal, but if Tokyo proves to be the end for Lloyd, her exit was pretty good just the same. She scored twice in the bronze-medal game and her final goal was classic Lloyd, with the veteran forward racing Australian defender Alanna Kennedy — 13 years her junior — to a Christen Press through-ball, then beating former UCLA keeper Teagan Micah with a clinical finish.
            
            Here’s another reason it was a classic Lloyd goal: In three of the four Olympic Games she played in, she scored the last U.S. goal to win her team a medal — two of them gold and the last one bronze. It also was the 128th goal of her career, tying Germany’s Birgit Prinz for fifth all time, and her 10th in Olympic play, most by an American. “Obviously we were striving for gold,” said Lloyd, whose 312th international appearance gave her sole possession of second place on the all-time list. “When you get third place in a World Cup, you get a little chintzy medal from FIFA. This [bronze] isn’t chintzy. It’s just a different color. Not everybody gets them and it’s truly special and we had to dig really deep to get it.”

            Lloyd and Rapinoe are not the only ones for whom the bronze medal likely will be a parting gift. The U.S. roster in Tokyo included 17 players off the victorious 2019 World Cup team, and if the Games had been played on time a year ago, the Americans might have become the first team to win world and Olympic titles in the same cycle.
            
            But the Games were delayed by COVID-19 and by the time the U.S. got to Japan, its team averaged more than 30 years of age, making it the oldest one the Americans ever fielded. It looked every bit its age, shut out three times in its first five games.
            
            The U.S. had gone 44 matches and more than 2½ years without a loss when it left for Tokyo. It then lost twice in 12 days after it got there, marking the end of a spectacular run.
            
            The team will need an extensive remake ahead of the 2023 World Cup. Lloyd turned 39 in Japan and Rapinoe, who also scored twice in the bronze-medal game, turned 36 last month, the same age as captain Becky Sauerbrunn. Alyssa Naeher, Kelley O’Hara and Tobin Heath are 33, Alex Morgan and Press are 32.
            
            That’s eight starters who are older than anyone on the rosters for Japanese, Chinese and Zambians — combined. Tokyo clearly marked the end of one era and the start of another one for the U.S. women’s team. For Lloyd, a two-time world player of the year, it feels like the right time to hand off the baton.
            
            “Not to put this in a bad way, but when you win a lot it’s like how do you keep finding that next gear and that next push to keep getting better and better?” she said. “That’s why winning the World Cup and then turning around and winning an Olympics is challenging. We lost our way a little bit. I don’t think it was one particular thing, but I think that we maybe needed this tournament to go the way that it did for everybody to realize how important that culture is.
            
            “On paper yeah, we look like the best team in the world. But talent doesn’t get you medals. Every medal that I’ve won, every World Cup that I’ve won, we haven’t necessarily been the best team, but we’ve had the best mentality and the best fight.”
            
            It’s time to let others continue that fight.`
    },
    {
      category: 'Soccer',

      title: `Lionel Messi signs contract with Paris Saint-Germain`,

      image: `https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2021/08/10/Desktop_2122_UK_L1_Paris_Messi_shirt_Parc_signature.jpg?h=1035&la=en&w=2000&hash=BDC8D9B6B863A10C688D9B846824CF29`,
      content: `Lionel Messi signed a contract with Paris Saint-Germain on Tuesday to end his career-long association with Barcelona and start a new era for PSG.

            The French club said in a statement that the 34-year-old Argentina star signed a two-year deal with the option for a third season.
            
            “I am excited to begin a new chapter of my career at Paris Saint-Germain,“ Messi said. “Everything about the club matches my football ambitions. I know how talented the squad and the coaching staff are here. I am determined to help build something special for the club and the fans, and I am looking forward to stepping out onto the pitch at the Parc des Princes.”
            
            No salary details were given, but a person with knowledge of the negotiations earlier told the Associated Press that Messi is set to earn around $41 million net annually. The person spoke on condition of anonymity before the contract was signed.
            
            “I am delighted that Lionel Messi has chosen to join Paris Saint-Germain and we are proud to welcome him and his family to Paris,“ PSG chairman Nasser Al-Khelaifi said. “He has made no secret of his desire to continue competing at the very highest level and winning trophies, and naturally our ambition as a club is to do the same.”
            
            It is symbolic that Messi will wear the No. 30 jersey — the same number he wore in his first two seasons with Barcelona before switching to No. 19 and then the prized No. 10, which Neymar gets to keep at PSG.
            
            PSG fans gathered at Le Bourget Airport in Paris to welcome Messi, who was wearing a T-shirt featuring “Ici c’est Paris” — “Here is Paris.”
            
            The words are a long-familiar refrain from a favored fan chant at Parc des Princes stadium, where Messi is to be presented to them before kickoff of Saturday night’s game against Strasbourg.
            
            Such was the fervor of his arrival that police had to push back to stop metal barriers from toppling over at the airport as fans surged forward to get a better view. He then traveled into Paris with a police escort that included several officers on motorbikes and clad in black at the back of it.
            
            As disbelief at landing one of soccer’s all-time greats turned to sheer enthusiasm, many gathered for a glimpse of Messi at the stadium. They got their wish as the smiling superstar briefly waved to them before he underwent a medical check.
            
            Earlier, Messi’s father and agent, Jorge, had also confirmed his son was moving to PSG in a brief exchange with reporters at Josep Tarradellas Barcelona-El Prat Airport before he took his flight in the early afternoon.
            
            Messi arrived with his wife and three children and boarded a private jet.
            
            “With it all, toward a new adventure. The five together,” Antonela Roccuzzo said on Instagram alongside a photo with her husband on the plane.
            
            PSG supporters have seen their club transformed over the last decade since the influx of Qatari sovereign wealth investment linked to the emir. Once Messi’s Barcelona contract expired — and the Catalan club was unable to afford to keep him — PSG was one of the few clubs that could finance a deal to sign the six-time world player of the year.
            
            Messi’s arrival gives PSG formidable attacking options as he links up with France World Cup winner Kylian Mbappe and Brazil forward Neymar.
            
            While PSG had to pay $261 million to sign Neymar from Barcelona in 2017, there was no transfer fee for Messi.
            
            Messi became the most desired free agent in soccer history after his attempts to stay at Barcelona were rejected last week by the Spanish league because the salary would not comply with financial regulations, with the Catalan club burdened by debts of more than $1.4 billion.
            
            PSG coach Mauricio Pochettino quickly made contact with his fellow Argentine after Barcelona announced last Thursday that Messi would be leaving the club he joined as a 13-year-old.
            
            Messi won every major honor with Barcelona and was granted a tearful exit news conference on Sunday to signal the end of an era. Only Cristiano Ronaldo in the current era challenges Messi’s status as an all-time great.
            
            PSG will be hoping not only that Messi helps the team regain the French title it lost to Lille last season, but finally win the Champions League.`
    },
    {
      category: 'Soccer',

      title: `Soccer improves health, fitness and social abilities`,

      image: `http://soccertoday.com/wp-content/uploads/2018/07/Sports-Science-and-Soccer.jpg`,

      content: `Soccer is a pleasurable team sport that provides an all-round fitness and can be used as treatment for lifestyle-related diseases. Men worry less when playing soccer than when running. Women's soccer creates we-stories and helps women stay active.

            The above statements are taken from some of the results from an extensive soccer research project involving more than 50 researchers from seven countries. The researchers studied physiological, psychological and sociological aspects of recreational soccer and compared it with running. Led by Professors Peter Krustrup and Jens Bangsbo from the Department of Exercise and Sports Sciences, University of Copenhagen, the 3-year project covered several intervention studies involving both men, women and children, who were divided into soccer, running and control groups.
            
            The results from the studies are so remarkable that the Scandinavian Journal of Medicine and Science in Sports are publishing a special edition issue entitled "Football for Health" containing 14 scientific articles from the soccer project on April 6, 2010.
            
            Soccer for Health
            
            The researchers studied the physical effects of soccer training for untrained subjects aged 9 to 77 years. The conclusion was clear. Soccer provides broad-spectred health and fitness effects that are at least as pronounced as for running, and in some cases even better.
            
            Study leader Peter Krustrup concludes "Soccer is a very popular team sport that contains positive motivational and social factors that may facilitate compliance and contribute to the maintenance of a physically active lifestyle. The studies presented have demonstrated that soccer training for two-three hours per week causes significant cardiovascular, metabolic and musculoskeletal adaptations, independent on gender, age or lack of experience with soccer."
            
            Professor Jens Bangsbo continues: "The effects can be maintained for a long period even with a reduced frequency of training to one to two times one hour a week. Recreational soccer, therefore, appears to be an effective type of training leading to performance improvements and significant beneficial effects to health, including a reduction in the risk of cardiovascular diseases, falls and fractures. In a number of aspects, soccer training appears to be superior to running training. Soccer training can also be used to treat hypertension and it was clearly superior to a standard treatment strategy of physician-guided traditional recommendations."
            
            The two researchers foresee a great perspective in using soccer as a health promoting activity: "The studies have convincingly shown that soccer training is effective to enhance fitness and the health profile for the general population. Future studies are needed to understand what is causing the beneficial effects of football, how well football can be used to improve heart health in early childhood and how other patient groups such as those with type II diabetes or cancer can benefit from playing soccer."
            
            Soccer creates we-stories and helps women stay active
            
            One of the many aspects of the study was to examine the level of social capital for women gained from running and soccer. Even though both the soccer players and the runners trained in groups, there were significant differences in the way they interacted and what they considered the most important aspects of the sport they were engaging in. The runners were more focused on themselves as individuals, whereas the soccer players developed "we"-stories as they began to see themselves as a team. From the beginning, most of the women, both soccer players and runners, thought running would be an easier form of exercise to stick to after the intervention programme was over. That turned out not to be the case:
            
            "The most important finding was the difference in social interaction and creation of we-stories between the groups, which may impact the possibilities of long-term compliance. A year after the study, many of the soccer players continue to play soccer, some have even joined an organised soccer club. Not many from the running group have continued their training. This can very well be due to the fact that the runners focussed on their health and on getting in shape, whereas the soccer players were more committed to the activity itself, including the fun and not letting down team mates," says Associate Professor Laila Ottesen.
            
            Men worry less when playing soccer than when running
            
            Another study examined the exertion experienced during training for untrained adults and their experience of "worries" and "flow." This study, based on 6 groups of untrained men and women, showed that all groups experienced an overall high level of flow during the intervention, which underlines that the participants felt motivated, happy and involved to the point where they forgot time and fatigue. There was no difference in the level of worry for the female soccer players and runners, but the running men seemed to worry quite a lot more than their soccer playing counterparts.
            
            - "The men that played soccer elicited lower levels of worry than during running, 2.8 vs 4.0 on a 0-6 scale, and although they are training at the same average heart rate they do not feel the exertion as strongly as during running" says Associate Professor Anne-Marie Elbe and adds: "Further research is needed to examine why men and women experience playing soccer differently but it could be that the men just have had more experience with football in earlier years than the women."
            
            Documentation for FIFA, Michelle Obama and others
            
            F-MARC, the research unit of FIFA, is a central partner in the project and the research provides scientific documentation for initiatives such as FIFA's newly launched "The 11 for Health" campaign that uses soccer as an educational health tool for children in order to raise awareness and improve health in African and South American communities. Also Michelle Obama's "Let's Move" project aiming at eliminating obesity in American children through diet and sports have recently promoted soccer as a favourable activity. The research results are also used in Europe, where the research group is directly involved in implementing the results through projects focusing on adults and children, such as "The Open Soccer Club project," "The Soccer at Work project" and the "Intensity in Pupil School Sport project." Sports Confederations, Football Associations, Ministries of Culture and Health and researchers from Universities, Hospitals and Centres for Working Environment are cooperating about the implementation and scientific evaluation of those projects.`
    },
    {
      category: 'Soccer',

      title: `Pep Guardiola reveals plans to leave Man City in 2023 for a national team`,
      image: `https://i.guim.co.uk/img/media/479401244e578ea4926ac34475ecf0d545fffb51/0_332_3893_2336/master/3893.jpg?width=620&quality=85&auto=format&fit=max&s=e65a46e44f82b9d14850db1316a87a69`,
      content: `Pep Guardiola has said he plans to leave Manchester City when his current contract runs out in 2023. The 50-year-old Spaniard, who joined City in 2016 and has won three Premier League titles, feels he will need a rest after seven years in charge.

        Harry Kane training with Lucas Moura on Wednesday at Enfield
        Harry Kane confirms he is staying at Spurs after accepting City deal is dead
        Read more
        And the former Barcelona head coach revealed his next ambition is to take charge of a national team. “Next step will be a national team, if there is a possibility. A national team is the next step,” he said at an XP Investimentos event, as reported by ESPN on Wednesday.
        
        “After seven years on this team, I think I’m going to have a stop. I’m going to have to take a break, see what we’ve done. And in the process, I would like to train a South American [team], European [national side], playing a Copa América – I want to have that experience.”
        
        Guardiola took a 12-month break following his departure from Barcelona in 2012 after four years at the Camp Nou, and joined Bayern Munich in 2013.
        
        His comments will come as a further blow to the City hierarchy on the day their pursuit of Harry Kane ended, with the England captain confirming he would be staying at Tottenham this summer.`
    },
    {
      category: 'Soccer',

      title: `PSG reject Real Madrid’s £137m bid for Kylian Mbappé but admit he wants to go`,
      image: `https://i.guim.co.uk/img/media/d0084a0ef0212cae947364487814dc6f7274f07a/87_0_3473_2086/master/3473.jpg?width=620&quality=85&auto=format&fit=max&s=44cb611154ab7f4ac55372609dd50f61`,
      content: `Spanish and French media reported on Tuesday that Real Madrid had made a €160m (£137m) bid for the 22-year-old World Cup winner who scored 42 goals in all competitions for PSG last season and has reportedly said he wants to move to Spain.

        Leonardo said that PSG, who have just signed the Argentina forward Lionel Messi from Barcelona, did not plan to discuss the Mbappé matter again with Real Madrid and that if Mbappé wanted to leave he would have to do so on PSG’s terms.
        
        “Kylian Mbappé feels like leaving, this seems clear to me … Our goal is to extend and keep him. If a player wants to leave it must be under our terms. This applies not just to Kylian but to all players.”
        
        Leonardo would not confirm the figure of €160m but said the bid was “around that”. “We consider the offer as being very far from what Kylian is worth today,” he added. Mbappé joined PSG from AS Monaco in 2017, on loan initially and then permanently a year later in a deal valued at €180m.`
    },
    {
      category: 'Soccer',

      title: `'He was dangerous throughout the game': Tuchel pleased with Lukaku debut`,
      image: `https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2021/08/23102457/romelu-lukaku-saluting-the-chelsea-fans-versus-arsenal-2021.jpg`,
      content: `Chelsea manager Thomas Tuchel was pleased with Romelu Lukaku's dominant display against Arsenal in his first game back as a Chelsea player. 

        Lukaku scored 15 minutes into his second debut for the London club as they went on to beat a tame Arsenal side 2-0. 
        
        'It was a very good start. Of course, that's important when your a striker scores straightaway – and scores straightaway an important goal to bring the lead.'`
    },
    {
      category: 'Soccer',

      title: `Players not released for FIFA World Cup qualifiers: Explaining the moves by Premier League, La Liga`,
      image: `https://images.daznservices.com/di/library/sportin…c41m6q6dn922fe4.jpg?t=2117632587&w=720&quality=80`,
      content: `The English Premier League’s decision not to release players for World Cup qualifiers played in the UK’s red-list countries is set to impact multiple national teams battling for a berth in the 2022 FIFA World Cup.

        The decision is spurred by EPL clubs not wanting to see their star players sit out matches on their return because of quarantine restrictions by the UK government, which did not provide players an exemption from its rules. Players returning from the UK's red-list countries would have to quarantine for a full 10 days in a managed quarantine hotel. That timetable would force players who traveled for their national team matches to miss two Premier League matches, a UEFA club competition matchday and the third round of the League Cup (Carabao Cup). According to its statement, the EPL’s announcement affects 60 players from 19 Premier League clubs who were due to travel to 26 red-list countries. Among the countries on the list are all 10 South American nations involved in CONMEBOL regional World Cup qualifiers, as well as three of the eight nations in the final round of CONCACAF regional qualifying: Panama, Mexico and Costa Rica. The only European countries on the UK’s red list are Georgia and Turkey. Does the EPL decision affect the USA & Canada
        The U.S. and Canada men’s national teams are not impacted by the Premier League’s decision given that their scheduled travel for the three World Cup qualifiers to be played in September do not involve red-list countries. The USA plays in El Salvador (Sept. 2), at home against Canada in Nashville (Sept. 5) and in Honduras (Sept. 8), while two of Canada’s matches will be on home soil (Sept. 2 and Sept. 8) in addition to the match against the USA. The Premier League indicated that it was forced to make its decision after FIFA did not extend its temporary release exception for players required to quarantine on their return to their clubs following international duty. FIFA implemented that exception for international matches during the pandemic beginning in August 2020, allowing clubs not to release players to their national teams if they were forced to quarantine upon their return to their clubs based on local government regulations.

        “Clubs have reluctantly but rightly come to the conclusion that it would be entirely unreasonable to release players under these new circumstances,” Premier League Chief Executive Richard Masters said in a league statement. “Quarantine requirements mean that players’ welfare and fitness will be significantly impacted. We understand the challenges that exist in the international match calendar and remain open to workable solutions."
        
        Spain’s La Liga followed the Premier League’s lead and announced that it would support its clubs’ decision not to release players who were called up by their South American nations. La Liga clubs and other members of the European Club Association (ECA) are particularly incensed because on Aug. 6 FIFA extended the South American international window by three days in September and October to allow for the playing of two rounds of World Cup qualifiers that were canceled because of the pandemic.`
    },
    {
      category: 'Soccer',

      title: `When is the Champions League draw? How to watch 2021 UCL group stage reveal in USA`,
      image: `https://images.daznservices.com/di/library/sportin…m11ca5oi7p4pmu.jpg?t=-2089118325&w=720&quality=80`,
      content: `The 32 team names will be split up into four different pots and a name will be drawn from each to give shape to the eight Champions League groups. The one major caveat: No club can play a team from its own country in the group stage.

        Each team will play a total of six group-stage matches with the top two teams in each group advancing to the Champions League Round of 16 in February 2022. The team that finishes in third place in each group is eliminated, but the consolation prize is that it will drop into the UEFA Europa League knockout stage to face one of the Europa League group-stage runners-up.`
    },
    {
      category: 'Soccer',

      title: `Who will win Serie A? Juventus favorites again in 2021-22`,
      image: `https://images.daznservices.com/di/library/sporting_news/5e/1d/serie-a-2021-2022-ronaldo-zlatan-lautaro_1i34csrkiyd3u10o4nqinh3lp8.jpeg?t=1717206619&w=720&quality=80`,
      content: `A new Serie A season kicks off Saturday, Aug. 21, and after having to watch a rival claim the title it owned for nine straight seasons, Juventus will look to reclaim its position as the best team in Italy entering the campaign as the clear-cut favorite.

        The winningest team in Italy is bringing back practically its entire squad from last season, but this time the players will be led by head coach Massimiliano Allegri, who's back at the helm after a two-year hiatus. He will take over a team that is coming off a disappointing fourth-place finish, 13 points behind eventual champion Inter Milan.
        
        Many are predicting a tough season for cash-challenged champion Inter, which lost its coach (Antonio Conte) and was compelled to transfer its top scorer (Romelu Lukaku) and last season's revelation (Achraf Hakimi) to balance the budget during the summer. Meanwhile, second-place finisher AC Milan has kept its squad and added a handful of reinforcements. Atalanta looks poised to compete for a top-four spot again, while AS Roma, Lazio and Napoli will hope that a change in manager can transform them into serious contenders.`
    },
    {
      title: `What are Cristiano Ronaldo's diet, workout and fitness secrets?`,
      image: `https://images.daznservices.com/di/library/GOAL/a8/33/cristiano-ronaldo-portugal-euro-2020_1f6il2n3tdi6k14aqq6u261e4e.jpg?t=355741914&w=720&quality=80`,
      content: `There is no player in world football that has drawn more plaudits for his physical qualities and dedication to his craft than Cristiano Ronaldo.

        The Juventus and Portugal star boasts an extraordinary set of athletic skills, combining rapid pace and agility with elite aerial ability and power.
        
        Ronaldo was not born with those traits, though; the rippling physique we see today is a marked transformation from the skinny teenager that arrived at Manchester United from Sporting back in 2003.
        
        So how was the incredible athlete and five-time Ballon d'Or winner created?
        
        With the help of 15 fitness tips Ronaldo revealed himself, Goal takes a look at the secrets behind his strength and speed.
        
        How does Cristiano Ronaldo train?
        First thing's first: start with a warm-up to decrease the risk of injury. "In training we do a few laps of the pitch, stretching and cardio warm-up exercises," Ronaldo explains.
        
        "Make sure you do something similar in your training, even if it is jogging to the gym or a warm up on the treadmill or bicycle."
        
        When in the gym, Ronaldo's main workout is split between cardiovascular training - such as running and rowing - and weights. "Mix it up," Ronaldo advises - as well as keeping things interesting, it's important to ensure all areas of the body are targeted and exercises improve both strength and stamina.
        
        On the pitch, the focus is on high-intensity drills that reflect match situations. "We do a lot of sprinting drills in training and they can be incorporated into your workout whether you are in the gym or outdoors," Ronaldo says. "Try and add it to every workout you do."
        
        Workouts are not restricted to the time Ronaldo spent at training facilities, though. "Fit in exercise wherever you can," he adds.
        
        "You can do an abs workout in your bedroom when you wake up in the morning or before you go to bed. If you get into a routine then it makes it easier as it will become a habit." What does Cristiano Ronaldo eat?
        There's no point having the nicest car if you're not going to put the right fuel in it.
        
        Ronaldo, unsurprisingly, takes his diet very seriously. "A good workout must be combined with a good diet," he states. "I eat a high protein diet, with lots of wholegrain carbs, fruit and vegetables, and avoid sugary foods."
        
        The Portugal international has a personal dietician who has worked with him ever since his Real Madrid days, eating six small meals a day – or one every three to four hours.
        
        He particularly likes fish – particularly swordfish, sea bass and sea bream – and his favourite dish is bacalhau a braz, which is a mixture of cod, onions, thinly sliced potatoes and scrambled eggs. He also eats plenty of fruits and lean proteins. At restaurants, Ronaldo says he often orders steak and a salad, and never anything frozen - everything he eats is fresh. For his breakfast, Ronaldo is partial to the likes of cheese, ham, low-fat yoghurt alongside plenty of fruit as well as avocado toast.

        "Eat regularly," Ronaldo continues. "If you train regularly it’s important to keep energy levels high to fuel your body for better performance. I sometimes eat up to six smaller meals a day to make sure I have enough energy to perform each session at top level."
        
        Hydration is vital, too - "drinking water is so important," Ronaldo affirms - but one of the sacrifices he makes to keep his body in top condition is avoiding alcohol and carbonated drinks. What other secrets does Cristiano Ronaldo have?
        Healthy living is not something that Ronaldo dedicates a few hours to each day - it's a way of life he adheres to at all times.
        
        That is not only a physical challenge but a mental one, too. "Learn to train your mind as well as your body," Ronaldo says. "Mental strength is just as important as physical strength and will help you achieve your goals.
        
        "Be disciplined. Keeping yourself motivated and sticking to your routine is key. For me, there is no room for easing off so I have to be strict."
        
        You can help yourself by setting goals and working with a training partner, adding competitiveness and company to your routine.
        
        When he is not exercising Ronaldo tries to maintain a relaxed, restful lifestyle despite his massive fame and the attention he commands.
        
        "Training and physical sessions are most important, but living a relaxed lifestyle helps you to be the best you can be, physically and mentally," Ronaldo explains. "I spend my free time with family and friends, which keeps me relaxed and in a positive mindset."
        
        Something unique in Ronaldo's fitness regime is that he does not sleep for the traditional eight hours a day. Rather, instead, he chooses to take five 90-minute naps a day.
        
        Says Professor Littlehales in his book "Sleep: The Myth of 8 Hours, the Power of Naps... and the New Plan to Recharge Your Body and Mind": it is better for athletes to take five naps each day consisting of 90 minutes each instead of a full night's sleep.`
    },
    {
      title: `CONCACAF 2022 World Cup Qualifying: Schedule, standings and TV for soccer Octagonal`,
      image: `https://images.daznservices.com/di/library/sportin…bmj16uhxvaiznup2.jpg?t=343450490&w=720&quality=80`,
      content: `The field is set. Eight nations from the CONCACAF region (North America, Central America and the Caribbean) will compete for three automatic berths to the 2022 Qatar World Cup in the final "octagonal" qualifying round.

        The eight countries will face off in a round-robin format with each team playing the other seven opponents once at home and once on the road. The 14 total matches for each national team will begin in September 2021 and wrap up in March 2022. 
        
        The top three finishers will earn automatic berths to Qatar, while the fourth-place team will head to an intercontinental playoff with a final ticket to Qatar on the line.
        
        The Qatar World Cup will be played from Nov. 21 to Dec. 18, 2022.`
    }
  ]
  await SoccerArticle.insertMany(soccerArticles)
  console.log('Soccer Articles added to db')
}

const run = async () => {
  await main()
  db.close()
}

run()
