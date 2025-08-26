const verses = [

  {
    text: "In the beginning God created the heavens and the earth. – Genesis 1:1",
    reflection: "Every story begins with creation. Yours too."
  },
  {
    text: "Let us love one another, because love is from God. – 1 John 4:7",
    reflection: "Love is not optional. It’s divine."
  },
  {
    text: "I have set my rainbow in the clouds, and it shall be a sign of the covenant. – Genesis 9:13",
    reflection: "God’s promises shine brightest after the storm."
  },
  {
    text: "The Lord is my shepherd, I shall not want. – Psalm 23:1",
    reflection: "You are never alone. You are always guided."
  },
  {
    text: "You are the light of the world. – Matthew 5:14",
    reflection: "Shine gently. Someone needs your glow."
  },
  {
    text: "Do not fear, for I am with you. – Isaiah 41:10",
    reflection: "Fear fades when presence is real."
  },
  {
    text: "Blessed are the peacemakers, for they will be called children of God. – Matthew 5:9",
    reflection: "Peace is not weakness. It’s sacred strength."
  },
  {
    text: "Be still, and know that I am God. – Psalm 46:10",
    reflection: "Stillness is not silence. It’s trust."
  },
  {
    text: "Love your neighbor as yourself. – Mark 12:31",
    reflection: "The measure of love is equality."
  },
  {
    text: "Come to me, all you who are weary... and I will give you rest. – Matthew 11:28",
    reflection: "Rest is not retreat. It’s restoration."
  },
  {
  text: "The steadfast love of the Lord never ceases, his mercies never come to an end. – Lamentations 3:22",
  reflection: "Mercy is not a moment. It’s a rhythm."
},
{
  text: "You knit me together in my mother’s womb. – Psalm 139:13",
  reflection: "You were crafted with intention, not accident."
},
{
  text: "God is love, and those who abide in love abide in God. – 1 John 4:16",
  reflection: "To dwell in love is to dwell in God."
},
{
  text: "The light shines in the darkness, and the darkness did not overcome it. – John 1:5",
  reflection: "Light doesn’t fight darkness. It simply shines."
},
{
  text: "Create in me a clean heart, O God. – Psalm 51:10",
  reflection: "Renewal begins within, not around."
},
{
  text: "For I know the plans I have for you... plans to give you hope and a future. – Jeremiah 29:11",
  reflection: "Hope is not vague. It’s designed."
},
{
  text: "Rejoice always, pray without ceasing, give thanks in all circumstances. – 1 Thessalonians 5:16–18",
  reflection: "Gratitude is a posture, not a reaction."
},
{
  text: "Even though I walk through the darkest valley, I fear no evil. – Psalm 23:4",
  reflection: "Courage is not the absence of valleys. It’s walking through them."
},
{
  text: "Let your gentleness be known to everyone. – Philippians 4:5",
  reflection: "Gentleness is strength wrapped in grace."
},
{
  text: "You are precious in my sight, and honored, and I love you. – Isaiah 43:4",
  reflection: "You are not tolerated. You are treasured."
},
{
  text: "The Lord is good to all, and his compassion is over all that he has made. – Psalm 145:9",
  reflection: "Compassion is creation’s constant companion."
},
{
  text: "Speak the truth to one another; render true judgments. – Zechariah 8:16",
  reflection: "Truth builds trust. Silence breaks it."
},
{
  text: "Let your yes be yes and your no be no. – Matthew 5:37",
  reflection: "Clarity is kindness. Ambiguity wounds."
},
{
  text: "The Lord will fight for you, and you have only to keep still. – Exodus 14:14",
  reflection: "Stillness is not surrender. It’s sacred confidence."
},
{
  text: "You shall love the Lord your God with all your heart... – Deuteronomy 6:5",
  reflection: "Wholehearted love leaves no room for fear."
},
{
  text: "Do not judge, so that you may not be judged. – Matthew 7:1",
  reflection: "Judgment divides. Grace restores."
},
{
  text: "Let justice roll down like waters, and righteousness like an ever-flowing stream. – Amos 5:24",
  reflection: "Justice is not noise. It’s movement."
},
{
  text: "The Lord is my light and my salvation; whom shall I fear? – Psalm 27:1",
  reflection: "Light dissolves fear. Salvation anchors peace."
},
{
  text: "A soft answer turns away wrath. – Proverbs 15:1",
  reflection: "Gentleness disarms what anger inflames."
},
{
  text: "Do not worry about tomorrow... – Matthew 6:34",
  reflection: "Tomorrow is not yours to carry today."
},
{
  text: "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  reflection: "Peace is not passive. It governs gently."
},
{
  text: "The Lord is gracious and merciful, slow to anger and abounding in steadfast love. – Psalm 145:8",
  reflection: "Grace is not rushed. It waits and welcomes."
},
{
  text: "Trust in the Lord with all your heart... – Proverbs 3:5",
  reflection: "Trust is not partial. It’s whole-hearted."
},
{
  text: "Blessed are those who mourn, for they will be comforted. – Matthew 5:4",
  reflection: "Grief is not weakness. It’s sacred ground."
},
{
  text: "Let your light shine before others... – Matthew 5:16",
  reflection: "Shining is not showing off. It’s showing up."
},
{
  text: "The Lord is near to all who call on him. – Psalm 145:18",
  reflection: "Calling is connection, not performance."
},
{
  text: "Do not be conformed to this world, but be transformed... – Romans 12:2",
  reflection: "Transformation begins where imitation ends."
},
{
  text: "The fruit of the Spirit is love, joy, peace... – Galatians 5:22",
  reflection: "Fruit grows quietly. So does character."
},
{
  text: "Let the words of my mouth and the meditation of my heart be acceptable... – Psalm 19:14",
  reflection: "Integrity begins in silence before it speaks."
},
{
  text: "Be kind to one another, tenderhearted, forgiving one another... – Ephesians 4:32",
  reflection: "Kindness is not weakness. It’s divine strength."
},
{
  text: "The Lord is my strength and my shield... – Psalm 28:7",
  reflection: "Strength doesn’t always roar. Sometimes it rests."
},
{
  text: "Do not let your hearts be troubled. Believe in God... – John 14:1",
  reflection: "Belief is the balm for troubled hearts."
},
{
  text: "Let us not grow weary in doing good... – Galatians 6:9",
  reflection: "Goodness is a long game. Keep going."
},
{
  text: "The Lord is faithful in all his words and gracious in all his deeds. – Psalm 145:13",
  reflection: "Faithfulness is not flashy. It’s steady."
},
{
  text: "You shall be holy, for I the Lord your God am holy. – Leviticus 19:2",
  reflection: "Holiness is not perfection. It’s presence."
},
{
  text: "Do not be overcome by evil, but overcome evil with good. – Romans 12:21",
  reflection: "Goodness is resistance, not passivity."
},
{
  text: "The Lord is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  reflection: "Brokenness is not failure. It’s where healing begins."
},
{
  text: "Faith, hope, and love abide, these three; and the greatest of these is love. – 1 Corinthians 13:13",
  reflection: "Love outlasts even what we believe and expect."
},
{
  text: "Let the morning bring me word of your unfailing love. – Psalm 143:8",
  reflection: "Each sunrise is a whisper of mercy."
},
{
  text: "You are the body of Christ and individually members of it. – 1 Corinthians 12:27",
  reflection: "Belonging is not earned. It’s gifted."
},
{
  text: "The Lord is my rock, my fortress, and my deliverer. – Psalm 18:2",
  reflection: "Stability is not found. It’s received."
},
{
  text: "Let us run with perseverance the race that is set before us. – Hebrews 12:1",
  reflection: "Perseverance is not speed. It’s sacred endurance."
},
{
  text: "You are a chosen race, a royal priesthood... – 1 Peter 2:9",
  reflection: "Chosen doesn’t mean better. It means purposed."
},
{
  text: "Do not lag in zeal, be ardent in spirit, serve the Lord. – Romans 12:11",
  reflection: "Zeal is not noise. It’s sacred energy."
},
{
  text: "The Lord is my portion, says my soul, therefore I will hope in him. – Lamentations 3:24",
  reflection: "Hope is not a backup plan. It’s a foundation."
},
{
  text: "Let your speech always be gracious, seasoned with salt. – Colossians 4:6",
  reflection: "Words can wound or heal. Choose grace."
},
{
  text: "The Lord will keep your going out and your coming in. – Psalm 121:8",
  reflection: "God’s care doesn’t clock out."
},
{
  text: "Do not repay anyone evil for evil... live peaceably with all. – Romans 12:17–18",
  reflection: "Peace is not passive. It’s a choice."
},
{
  text: "Let us hold fast to the confession of our hope without wavering. – Hebrews 10:23",
  reflection: "Hope held tightly becomes testimony."
},
{
  text: "You are the salt of the earth. – Matthew 5:13",
  reflection: "Salt preserves. So does presence."
},
{
  text: "Let the word of Christ dwell in you richly. – Colossians 3:16",
  reflection: "Dwelling is deeper than visiting."
},
{
  text: "You are my hiding place and my shield. – Psalm 119:114",
  reflection: "Safety is not escape. It’s sacred shelter."
},
{
  text: "Let us consider how to provoke one another to love and good deeds. – Hebrews 10:24",
  reflection: "Provoking love is holy mischief."
},
{
  text: "The Lord is my strength and my song. – Exodus 15:2",
  reflection: "Strength sings when it’s rooted in joy."
},
{
  text: "You are my witnesses, says the Lord. – Isaiah 43:10",
  reflection: "Your story is sacred evidence."
},
{
  text: "Let the peace of God guard your hearts and minds. – Philippians 4:7",
  reflection: "Peace is not passive. It protects."
},
{
  text: "The Lord is righteous in all his ways and faithful in all he does. – Psalm 145:17",
  reflection: "Faithfulness is not flashy. It’s steady."
},
{
  text: "Let everything that has breath praise the Lord. – Psalm 150:6",
  reflection: "Breath is worship in motion."
},
{
  text: "You are all children of light and children of the day. – 1 Thessalonians 5:5",
  reflection: "You were never meant to hide."
},
{
  text: "The Lord is my refuge and strength, a very present help in trouble. – Psalm 46:1",
  reflection: "Help is not delayed. It’s present."
},
{
  text: "Let the one who boasts boast in the Lord. – 1 Corinthians 1:31",
  reflection: "True confidence is rooted in grace, not ego."
},
{
  text: "The Lord is near to those who call on him in truth. – Psalm 145:18",
  reflection: "Truth is not a threat. It’s a bridge."
},
{
  text: "You are the temple of the living God. – 2 Corinthians 6:16",
  reflection: "Holiness lives in ordinary vessels."
},
{
  text: "Let the word of Christ dwell in you richly. – Colossians 3:16",
  reflection: "Let truth take root, not just pass through."
},
{
  text: "The Lord is my portion forever. – Psalm 73:26",
  reflection: "Forever is not far away. It’s here in grace."
},
{
  text: "Let your heart take courage, all you who wait for the Lord. – Psalm 31:24",
  reflection: "Waiting is not wasting. It’s preparing."
},
{
  text: "The Lord is good, a stronghold in the day of trouble. – Nahum 1:7",
  reflection: "Trouble doesn’t cancel goodness. It reveals it."
},
{
  text: "Let the words of my mouth and the meditation of my heart be acceptable to you. – Psalm 19:14",
  reflection: "Integrity begins in silence before it speaks."
},
{
  text: "You are my hiding place; you will protect me from trouble. – Psalm 32:7",
  reflection: "Protection is not escape. It’s sacred presence."
},
{
  text: "Let your gentleness be evident to all. – Philippians 4:5",
  reflection: "Gentleness is strength softened by grace."
},
{
  text: "The Lord is my rock, my fortress and my deliverer. – Psalm 18:2",
  reflection: "Fortress is not isolation. It’s divine refuge."
},
{
  text: "Let us love not in word or speech but in truth and action. – 1 John 3:18",
  reflection: "Love moves. It doesn’t just speak."
},
{
  text: "The Lord is gracious and merciful, slow to anger and abounding in steadfast love. – Psalm 145:8",
  reflection: "Mercy is not rushed. It waits with love."
},
{
  text: "You are precious in my sight, and honored, and I love you. – Isaiah 43:4",
  reflection: "You are not tolerated. You are treasured."
},
{
  text: "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  reflection: "Peace is not passive. It governs gently."
},
{
  text: "The Lord is faithful in all his words and gracious in all his deeds. – Psalm 145:13",
  reflection: "Faithfulness is not flashy. It’s steady."
},
{
  text: "You shall be holy, for I the Lord your God am holy. – Leviticus 19:2",
  reflection: "Holiness is not perfection. It’s presence."
},
{
  text: "Do not let your hearts be troubled. Trust in God. – John 14:1",
  reflection: "Troubled hearts find rest in trust."
},
{
  text: "Let us not grow weary in doing good... – Galatians 6:9",
  reflection: "Goodness is a long game. Keep going."
},
{
  text: "The Lord is my strength and my shield; my heart trusts in him. – Psalm 28:7",
  reflection: "Trust is not blind. It’s anchored in strength."
},
{
  text: "Let the morning bring me word of your unfailing love. – Psalm 143:8",
  reflection: "Each sunrise is a whisper of mercy."
},
{
  text: "You are the body of Christ and individually members of it. – 1 Corinthians 12:27",
  reflection: "Belonging is not earned. It’s gifted."
},
{
  text: "Let us run with perseverance the race set before us. – Hebrews 12:1",
  reflection: "Endurance is sacred, even when slow."
},
{
  text: "So God created humankind in his image... male and female he created them. – Genesis 1:27",
  reflection: "You were made in love, shaped in dignity, and born with divine intention."
},
{
  text: "There is no fear in love, but perfect love casts out fear. – 1 John 4:18",
  reflection: "Love doesn’t threaten. It liberates."
},
{
  text: "You shall love your neighbor as yourself. – Leviticus 19:18",
  reflection: "Love begins with how you see yourself — and how you see others."
},
{
  text: "For the Lord sees not as mortals see... the Lord looks on the heart. – 1 Samuel 16:7",
  reflection: "God’s gaze bypasses labels and lands on your soul."
},
{
  text: "Welcome one another, therefore, just as Christ has welcomed you. – Romans 15:7",
  reflection: "Welcome is not a gesture. It’s a gospel."
},
{
  text: "I praise you, for I am fearfully and wonderfully made. – Psalm 139:14",
  reflection: "You are not a mistake. You are a masterpiece."
},
{
  text: "Above all, clothe yourselves with love, which binds everything together in perfect harmony. – Colossians 3:14",
  reflection: "Love is the thread that holds us together."
},
{
  text: "Let all that you do be done in love. – 1 Corinthians 16:14",
  reflection: "Love is not a mood. It’s a mission."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "God is not unjust; he will not forget your work and the love you have shown. – Hebrews 6:10",
  reflection: "Love never goes unnoticed by heaven."
},
{
  text: "Do not forget to show hospitality to strangers. – Hebrews 13:2",
  reflection: "Strangers are just beloveds you haven’t met yet."
},
{
  text: "Let us love, not in word or speech, but in truth and action. – 1 John 3:18",
  reflection: "Love that moves is love that matters."
},
{
  text: "The Lord is good to all, and his compassion is over all that he has made. – Psalm 145:9",
  reflection: "Compassion doesn’t discriminate. It embraces."
},
{
  text: "You are the light of the world. – Matthew 5:14",
  reflection: "Your light is not conditional. It’s divine."
},
{
  text: "Do not judge, and you will not be judged. – Luke 6:37",
  reflection: "Judgment builds walls. Grace builds bridges."
},
{
  text: "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  reflection: "Peace is not passive. It’s powerful."
},
{
  text: "The Lord is near to all who call on him in truth. – Psalm 145:18",
  reflection: "Truth is not a threat. It’s a doorway."
},
{
  text: "You are no longer strangers and aliens, but citizens with the saints. – Ephesians 2:19",
  reflection: "You belong. Fully. Freely. Forever."
},
{
  text: "The Spirit helps us in our weakness. – Romans 8:26",
  reflection: "Weakness is not failure. It’s where grace flows."
},
{
  text: "Let us make humankind in our image, according to our likeness. – Genesis 1:26",
  reflection: "You reflect divine creativity — not conformity."
},
{
  text: "The Lord is my shepherd; I shall not want. – Psalm 23:1",
  reflection: "You are guided, not forgotten."
},
{
  text: "Love does no wrong to a neighbor; therefore, love is the fulfilling of the law. – Romans 13:10",
  reflection: "Love is the law that liberates."
},
{
  text: "You are a chosen people, a royal priesthood... – 1 Peter 2:9",
  reflection: "Chosen doesn’t mean exclusive. It means embraced."
},
{
  text: "Let your light shine before others. – Matthew 5:16",
  reflection: "Shine gently. Someone needs your glow."
},
{
  text: "The Lord is near to the brokenhearted. – Psalm 34:18",
  reflection: "God doesn’t avoid pain. He enters it."
},
{
  text: "Bear one another’s burdens, and in this way you will fulfill the law of Christ. – Galatians 6:2",
  reflection: "Compassion is shared weight."
},
{
  text: "You are all children of light and children of the day. – 1 Thessalonians 5:5",
  reflection: "You were never meant to hide."
},
{
  text: "The Lord is my strength and my shield. – Psalm 28:7",
  reflection: "Strength doesn’t always roar. Sometimes it rests."
},
{
  text: "Let us not grow weary in doing good. – Galatians 6:9",
  reflection: "Goodness is a long game. Keep going."
},
{
  text: "You shall love the stranger, for you were strangers in the land of Egypt. – Deuteronomy 10:19",
  reflection: "Empathy remembers where it came from."
},
{
  text: "The Lord is my light and my salvation; whom shall I fear? – Psalm 27:1",
  reflection: "Fear fades when light leads."
},
{
  text: "Let all that you do be done in love. – 1 Corinthians 16:14",
  reflection: "Love is not a decoration. It’s a foundation."
},
{
  text: "You are fearfully and wonderfully made. – Psalm 139:14",
  reflection: "Wonder is woven into your being."
},
{
  text: "The Lord is faithful in all his words. – Psalm 145:13",
  reflection: "Faithfulness is not flashy. It’s steady."
},
{
  text: "You are the temple of the living God. – 2 Corinthians 6:16",
  reflection: "Holiness lives in ordinary vessels."
},
{
  text: "Let us pursue what makes for peace and mutual upbuilding. – Romans 14:19",
  reflection: "Peace builds. Pride breaks."
},
{
  text: "The Lord is good; his steadfast love endures forever. – Psalm 100:5",
  reflection: "Love that lasts is love that liberates."
},
{
  text: "You are no longer a slave but a child, and if a child then an heir. – Galatians 4:7",
  reflection: "Inheritance is not earned. It’s received."
},
{
  text: "Let us live honorably as in the day. – Romans 13:13",
  reflection: "Honor is not about image. It’s about integrity."
},
{
  text: "The Lord is my portion forever. – Psalm 73:26",
  reflection: "Enough is not measured. It’s trusted."
},
{
  text: "You are my beloved; with you I am well pleased. – Matthew 3:17",
  reflection: "Before you did anything, you were already loved."
},
{
  text: "Let us love one another, for love is from God. – 1 John 4:7",
  reflection: "Love is not earned. It’s inherited."
},
{
  text: "The Lord is near to all who call on him. – Psalm 145:18",
  reflection: "Nearness is not measured in distance, but in attention."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "Let us walk in the light as he is in the light. – 1 John 1:7",
  reflection: "Light is not perfection. It’s presence."
},
{
  text: "The Lord is my helper; I will not be afraid. – Hebrews 13:6",
  reflection: "Help is not weakness. It’s divine partnership."
},
{
  text: "You are the salt of the earth. – Matthew 5:13",
  reflection: "Salt preserves. So does presence."
},
{
  text: "You are all children of God through faith in Christ Jesus. – Galatians 3:26",
  reflection: "Faith doesn’t gatekeep. It welcomes."
},
{
  text: "The Lord is good; his mercy is everlasting. – Psalm 100:5",
  reflection: "Mercy doesn’t expire. It endures."
},
{
  text: "Let us hold fast to the hope we profess. – Hebrews 10:23",
  reflection: "Hope is not fragile. It’s anchored."
},
{
  text: "You are my beloved; with you I am well pleased. – Matthew 3:17",
  reflection: "You were loved before you were labeled."
},
{
  text: "The Lord is near to all who call on him. – Psalm 145:18",
  reflection: "God doesn’t screen calls. He answers."
},
{
  text: "Let us pursue what makes for peace and mutual upbuilding. – Romans 14:19",
  reflection: "Peace builds. Pride breaks."
},
{
  text: "You are no longer strangers and aliens, but members of the household of God. – Ephesians 2:19",
  reflection: "Home is not a place. It’s belonging."
},
{
  text: "The Lord is my portion, says my soul. – Lamentations 3:24",
  reflection: "Enough is not measured. It’s trusted."
},
{
  text: "Let your love be genuine. – Romans 12:9",
  reflection: "Genuine love doesn’t disguise itself."
},
{
  text: "You are fearfully and wonderfully made. – Psalm 139:14",
  reflection: "You are not a problem to solve. You are a wonder to behold."
},
{
  text: "The Lord is my helper; I will not be afraid. – Hebrews 13:6",
  reflection: "Help is not weakness. It’s divine partnership."
},
{
  text: "Let us walk in the light as he is in the light. – 1 John 1:7",
  reflection: "Light doesn’t shame. It reveals and heals."
},
{
  text: "You are the salt of the earth. – Matthew 5:13",
  reflection: "You bring flavor to a world that needs grace."
},
{
  text: "Let us be kind to one another. – Ephesians 4:32",
  reflection: "Kindness is not weakness. It’s sacred strength."
},
{
  text: "The Lord is close to the brokenhearted. – Psalm 34:18",
  reflection: "God doesn’t avoid pain. He enters it."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "Let all that you do be done in love. – 1 Corinthians 16:14",
  reflection: "Love is not decoration. It’s foundation."
},
{
  text: "The Lord is my light and my salvation. – Psalm 27:1",
  reflection: "Light doesn’t ask permission. It simply shines."
},
{
  text: "You are no longer a slave but a child, and if a child then an heir. – Galatians 4:7",
  reflection: "Inheritance is not earned. It’s received."
},
{
  text: "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  reflection: "Peace is not passive. It governs gently."
},
{
  text: "The Lord is faithful in all his words. – Psalm 145:13",
  reflection: "Faithfulness is not flashy. It’s steady."
},
{
  text: "You are the temple of the living God. – 2 Corinthians 6:16",
  reflection: "Holiness lives in ordinary vessels."
},
{
  text: "Let us not grow weary in doing good. – Galatians 6:9",
  reflection: "Goodness is a long game. Keep going."
},
{
  text: "You are my witnesses, says the Lord. – Isaiah 43:10",
  reflection: "Your story is sacred evidence."
},
{
  text: "Let the word of Christ dwell in you richly. – Colossians 3:16",
  reflection: "Dwelling is deeper than visiting."
},
{
  text: "The Lord is my strength and my shield. – Psalm 28:7",
  reflection: "Strength doesn’t always roar. Sometimes it rests."
},
{
  text: "You are the light of the world. – Matthew 5:14",
  reflection: "Your light is not conditional. It’s divine."
},
{
  text: "Let us love one another, for love is from God. – 1 John 4:7",
  reflection: "Love is not earned. It’s inherited."
},
{
  text: "The Lord is gracious and merciful. – Psalm 145:8",
  reflection: "Grace doesn’t rush. It waits and welcomes."
},
{
  text: "You are chosen and dearly loved. – Colossians 3:12",
  reflection: "Chosen doesn’t mean perfect. It means embraced."
},
{
  text: "Let us walk by the Spirit. – Galatians 5:25",
  reflection: "Walking with God is not about pace. It’s about presence."
},
{
  text: "The Lord is my refuge and strength. – Psalm 46:1",
  reflection: "Refuge is not escape. It’s sacred shelter."
},
{
  text: "You are all children of light. – 1 Thessalonians 5:5",
  reflection: "You were never meant to hide."
},
{
  text: "Let us live honorably as in the day. – Romans 13:13",
  reflection: "Honor is not about image. It’s about integrity."
},
{
  text: "The Lord is good; his steadfast love endures forever. – Psalm 100:5",
  reflection: "Love that lasts is love that liberates."
},
{
  text: "You are my beloved. – Song of Songs 2:16",
  reflection: "Beloved is not a title. It’s a truth."
},
{
  text: "Let us make humankind in our image. – Genesis 1:26",
  reflection: "You reflect divine creativity — not conformity."
},
{
  text: "The Lord is near to those who call on him in truth. – Psalm 145:18",
  reflection: "Truth is not a threat. It’s a bridge."
},
{
  text: "You are fearfully and wonderfully made. – Psalm 139:14",
  reflection: "Wonder is woven into your being."
},
{
  text: "Let us walk in love. – Ephesians 5:2",
  reflection: "Love is not a path. It’s a way of being."
},
{
  text: "The Lord is my portion forever. – Psalm 73:26",
  reflection: "Forever is not far away. It’s here in grace."
},
{
  text: "You are no longer strangers, but fellow citizens. – Ephesians 2:19",
  reflection: "You belong. Fully. Freely. Forever."
},
{
  text: "Let us be transformed by the renewing of our minds. – Romans 12:2",
  reflection: "Renewal begins where imitation ends."
},
{
  text: "The Lord is my helper; I will not be afraid. – Hebrews 13:6",
  reflection: "Help is not weakness. It’s divine partnership."
},
{
  text: "You are the salt of the earth. – Matthew 5:13",
  reflection: "Salt preserves. So does presence."
},
{
  text: "Let us be kind to one another. – Ephesians 4:32",
  reflection: "Kindness is not weakness. It’s sacred strength."
},
{
  text: "The Lord is my light and my salvation. – Psalm 27:1",
  reflection: "Light doesn’t ask permission. It simply arrives."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "For God shows no partiality. – Romans 2:11",
  reflection: "Grace doesn’t play favorites. It flows freely."
},
{
  text: "You are all children of God through faith. – Galatians 3:26",
  reflection: "Faith is not a filter. It’s a family."
},
{
  text: "Let mutual love continue. – Hebrews 13:1",
  reflection: "Love that lasts is love that listens."
},
{
  text: "You are a new creation; the old has passed away. – 2 Corinthians 5:17",
  reflection: "You are not your past. You are possibility."
},
{
  text: "God does not show favoritism but accepts from every nation the one who fears him. – Acts 10:34–35",
  reflection: "Acceptance is not earned. It’s extended."
},
{
  text: "Let us not love with words or speech but with actions and in truth. – 1 John 3:18",
  reflection: "Love that moves is love that matters."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "The Lord is good to all. – Psalm 145:9",
  reflection: "All means all. No exceptions."
},
{
  text: "Let us welcome one another as Christ welcomed us. – Romans 15:7",
  reflection: "Welcome is not optional. It’s sacred."
},
{
  text: "You are chosen, holy, and beloved. – Colossians 3:12",
  reflection: "Chosen doesn’t mean exclusive. It means embraced."
},
{
  text: "Let us pursue what makes for peace and mutual upbuilding. – Romans 14:19",
  reflection: "Peace builds. Pride breaks."
},
{
  text: "You are no longer strangers, but fellow citizens. – Ephesians 2:19",
  reflection: "You belong. Fully. Freely. Forever."
},
{
  text: "Let us walk in love. – Ephesians 5:2",
  reflection: "Love is not a path. It’s a posture."
},
{
  text: "The Lord is near to all who call on him. – Psalm 145:18",
  reflection: "Nearness is not earned. It’s offered."
},
{
  text: "You are the light of the world. – Matthew 5:14",
  reflection: "Your light is not conditional. It’s divine."
},
{
  text: "Let us be kind to one another. – Ephesians 4:32",
  reflection: "Kindness is not weakness. It’s sacred strength."
},
{
  text: "You are fearfully and wonderfully made. – Psalm 139:14",
  reflection: "You are not a problem to solve. You are a wonder to behold."
},
{
  text: "Let us walk by the Spirit. – Galatians 5:25",
  reflection: "Walking with God is not about pace. It’s about presence."
},
{
  text: "The Lord is my helper; I will not be afraid. – Hebrews 13:6",
  reflection: "Help is not weakness. It’s divine partnership."
},
{
  text: "You are the salt of the earth. – Matthew 5:13",
  reflection: "Salt preserves. So does presence."
},
{
  text: "Let your love be genuine. – Romans 12:9",
  reflection: "Genuine love doesn’t disguise itself."
},
{
  text: "You are my beloved; with you I am well pleased. – Matthew 3:17",
  reflection: "You were loved before you were labeled."
},
{
  text: "Let us live honorably as in the day. – Romans 13:13",
  reflection: "Honor is not about image. It’s about integrity."
},
{
  text: "You are no longer a slave but a child. – Galatians 4:7",
  reflection: "Inheritance is not earned. It’s received."
},
{
  text: "Let all that you do be done in love. – 1 Corinthians 16:14",
  reflection: "Love is not decoration. It’s foundation."
},
{
  text: "You are a chosen race, a royal priesthood. – 1 Peter 2:9",
  reflection: "Chosen doesn’t mean better. It means purposed."
},
{
  text: "Let us make humankind in our image. – Genesis 1:26",
  reflection: "You reflect divine creativity — not conformity."
},
{
  text: "The Lord is my portion forever. – Psalm 73:26",
  reflection: "Enough is not measured. It’s trusted."
},
{
  text: "You are all children of light. – 1 Thessalonians 5:5",
  reflection: "You were never meant to hide."
},
{
  text: "Let us not grow weary in doing good. – Galatians 6:9",
  reflection: "Goodness is a long game. Keep going."
},
{
  text: "You are the temple of the living God. – 2 Corinthians 6:16",
  reflection: "Holiness lives in ordinary vessels."
},
{
  text: "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  reflection: "Peace is not passive. It governs gently."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "Let us walk in the light as he is in the light. – 1 John 1:7",
  reflection: "Light doesn’t shame. It reveals and heals."
},
{
  text: "You are my witnesses, says the Lord. – Isaiah 43:10",
  reflection: "Your story is sacred evidence."
},
{
  text: "Let the word of Christ dwell in you richly. – Colossians 3:16",
  reflection: "Dwelling is deeper than visiting."
},
{
  text: "You are the body of Christ. – 1 Corinthians 12:27",
  reflection: "Belonging is not earned. It’s gifted."
},
{
  text: "Let us love one another, for love is from God. – 1 John 4:7",
  reflection: "Love is not earned. It’s inherited."
},
{
  text: "You are fearfully and wonderfully made. – Psalm 139:14",
  reflection: "Wonder is woven into your being."
},
{
  text: "Let us pursue what makes for peace. – Romans 14:19",
  reflection: "Peace builds. Pride breaks."
},
{
  text: "You are no longer strangers, but fellow citizens. – Ephesians 2:19",
  reflection: "You belong. Fully. Freely. Forever."
},
{
  text: "Let us be transformed by the renewing of our minds. – Romans 12:2",
  reflection: "Renewal begins where imitation ends."
},
{
  text: "You are chosen and dearly loved. – Colossians 3:12",
  reflection: "Chosen doesn’t mean perfect. It means embraced."
},
{
  text: "Let mutual love continue. – Hebrews 13:1",
  reflection: "Love that lasts is love that listens."
},
{
  text: "You are a new creation. – 2 Corinthians 5:17",
  reflection: "You are not your past. You are possibility."
},
{
  text: "Let us welcome one another as Christ welcomed us. – Romans 15:7",
  reflection: "Welcome is not optional. It’s sacred."
},
{
  text: "You are all children of God through faith. – Galatians 3:26",
  reflection: "Faith is not a filter. It’s a family."
},
{
  text: "Let us walk in love. – Ephesians 5:2",
  reflection: "Love is not a path. It’s a way of being."
},
{
  text: "You are God’s workmanship, created in Christ Jesus for good works. – Ephesians 2:10",
  reflection: "You were crafted with care, not coincidence."
},
{
  text: "Let us encourage one another, and build each other up. – 1 Thessalonians 5:11",
  reflection: "Encouragement is sacred architecture."
},
{
  text: "The Lord is my rock, my fortress, and my deliverer. – Psalm 18:2",
  reflection: "You are held, even when shaken."
},
{
  text: "You are the apple of His eye. – Zechariah 2:8",
  reflection: "You are not overlooked. You are cherished."
},
{
  text: "Let us bear with one another in love. – Ephesians 4:2",
  reflection: "Love is patient enough to carry weight."
},
{
  text: "You are not your mistakes. – Romans 8:1",
  reflection: "Grace rewrites every sentence of shame."
},
{
  text: "Let us draw near with a sincere heart. – Hebrews 10:22",
  reflection: "Sincerity is the language of belonging."
},
{
  text: "You are a citizen of heaven. – Philippians 3:20",
  reflection: "Your identity is not defined by borders."
},
{
  text: "Let us walk humbly with our God. – Micah 6:8",
  reflection: "Humility is not hiding. It’s honoring."
},
{
  text: "You are not alone. – Isaiah 41:10",
  reflection: "Presence is God’s promise, not a possibility."
},
{
  text: "Let us be slow to speak, quick to listen. – James 1:19",
  reflection: "Listening is love in motion."
},
{
  text: "You are called to freedom. – Galatians 5:13",
  reflection: "Freedom is not escape. It’s purpose."
},
{
  text: "Let us rejoice and be glad. – Psalm 118:24",
  reflection: "Joy is not naive. It’s resilient."
},
{
  text: "You are not forgotten. – Isaiah 49:15–16",
  reflection: "You are engraved on grace itself."
},
{
  text: "Let us be imitators of God, as beloved children. – Ephesians 5:1",
  reflection: "Imitation begins with intimacy."
},
{
  text: "You are made new. – Revelation 21:5",
  reflection: "Newness is not a restart. It’s a resurrection."
},
{
  text: "You are God’s masterpiece, created for good works. – Ephesians 2:10",
  reflection: "You weren’t mass-produced. You were hand-crafted."
},
{
  text: "Let us love one another, because love is from God. – 1 John 4:7",
  reflection: "Love is not a reward. It’s a reflection."
},
{
  text: "You are the apple of His eye. – Zechariah 2:8",
  reflection: "You are not overlooked. You are cherished."
},
{
  text: "Let us bear with one another in love. – Ephesians 4:2",
  reflection: "Love carries what judgment drops."
},
{
  text: "You are not your mistakes. – Romans 8:1",
  reflection: "Grace rewrites every sentence of shame."
},
{
  text: "Let us draw near with a sincere heart. – Hebrews 10:22",
  reflection: "Sincerity is the language of belonging."
},
{
  text: "You are a citizen of heaven. – Philippians 3:20",
  reflection: "Your identity is not defined by borders."
},
{
  text: "Let us walk humbly with our God. – Micah 6:8",
  reflection: "Humility is not hiding. It’s honoring."
},
{
  text: "You are not alone. – Isaiah 41:10",
  reflection: "Presence is God’s promise, not a possibility."
},
{
  text: "Let us be slow to speak, quick to listen. – James 1:19",
  reflection: "Listening is love in motion."
},
{
  text: "You are called to freedom. – Galatians 5:13",
  reflection: "Freedom is not escape. It’s purpose."
},
{
  text: "Let us rejoice and be glad. – Psalm 118:24",
  reflection: "Joy is not naive. It’s resilient."
},
{
  text: "You are not forgotten. – Isaiah 49:15–16",
  reflection: "You are engraved on grace itself."
},
{
  text: "Let us be imitators of God, as beloved children. – Ephesians 5:1",
  reflection: "Imitation begins with intimacy."
},
{
  text: "You are made new. – Revelation 21:5",
  reflection: "Newness is not a restart. It’s a resurrection."
},
{
  text: "Let us encourage one another daily. – Hebrews 3:13",
  reflection: "Encouragement is sacred oxygen."
},
{
  text: "You are chosen and dearly loved. – Colossians 3:12",
  reflection: "Chosen doesn’t mean perfect. It means embraced."
},
{
  text: "Let us walk in the light. – 1 John 1:7",
  reflection: "Light doesn’t shame. It reveals and heals."
},
{
  text: "You are a new creation. – 2 Corinthians 5:17",
  reflection: "You are not your past. You are possibility."
},
{
  text: "Let us welcome one another. – Romans 15:7",
  reflection: "Welcome is not optional. It’s sacred."
},
{
  text: "You are all children of God through faith. – Galatians 3:26",
  reflection: "Faith is not a filter. It’s a family."
},
{
  text: "Let us walk in love. – Ephesians 5:2",
  reflection: "Love is not a path. It’s a way of being."
},
{
  text: "You are no longer strangers, but fellow citizens. – Ephesians 2:19",
  reflection: "You belong. Fully. Freely. Forever."
},
{
  text: "Let us be transformed by the renewing of our minds. – Romans 12:2",
  reflection: "Renewal begins where imitation ends."
},
{
  text: "You are the temple of the living God. – 2 Corinthians 6:16",
  reflection: "Holiness lives in ordinary vessels."
},
{
  text: "Let us not grow weary in doing good. – Galatians 6:9",
  reflection: "Goodness is a long game. Keep going."
},
{
  text: "You are the light of the world. – Matthew 5:14",
  reflection: "Your light is not conditional. It’s divine."
},
{
  text: "Let us pursue what makes for peace. – Romans 14:19",
  reflection: "Peace builds. Pride breaks."
},
{
  text: "You are fearfully and wonderfully made. – Psalm 139:14",
  reflection: "You are not a problem to solve. You are a wonder to behold."
},
{
  text: "Let us be kind to one another. – Ephesians 4:32",
  reflection: "Kindness is not weakness. It’s sacred strength."
},
{
  text: "You are the salt of the earth. – Matthew 5:13",
  reflection: "Salt preserves. So does presence."
},
{
  text: "Let the peace of Christ rule in your hearts. – Colossians 3:15",
  reflection: "Peace is not passive. It governs gently."
},
{
  text: "You are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "Let the word of Christ dwell in you richly. – Colossians 3:16",
  reflection: "Dwelling is deeper than visiting."
},
{
  text: "You are my witnesses, says the Lord. – Isaiah 43:10",
  reflection: "Your story is sacred evidence."
},
{
  text: "Let mutual love continue. – Hebrews 13:1",
  reflection: "Love that lasts is love that listens."
},
{
  text: "You are a chosen race, a royal priesthood. – 1 Peter 2:9",
  reflection: "Chosen doesn’t mean better. It means purposed."
},
{
  text: "Let us love one another, for love is from God. – 1 John 4:7",
  reflection: "Love is not earned. It’s inherited."
},
{
  text: "You are no longer a slave but a child. – Galatians 4:7",
  reflection: "Inheritance is not earned. It’s received."
},
{
  text: "Let all that you do be done in love. – 1 Corinthians 16:14",
  reflection: "Love is not decoration. It’s foundation."
},
{
  text: "You are my beloved; with you I am well pleased. – Matthew 3:17",
  reflection: "You were loved before you were labeled."
},
{
  text: "Let us live honorably as in the day. – Romans 13:13",
  reflection: "Honor is not about image. It’s about integrity."
},
{
  text: "You are all children of light. – 1 Thessalonians 5:5",
  reflection: "You were never meant to hide."
},
{
  text: "Let us walk by the Spirit. – Galatians 5:25",
  reflection: "Walking with God is not about pace. It’s about presence."
},
{
  text: "You are chosen and dearly loved. – Colossians 3:12",
  reflection: "Chosen doesn’t mean perfect. It means embraced."
},
{
  text: "Let us encourage one another daily. – Hebrews 3:13",
  reflection: "Encouragement is sacred oxygen."
},
{
  text: "You are made new. – Revelation 21:5",
  reflection: "Newness is not a restart. It’s a resurrection."
},
{
  text: "Let us be imitators of God, as beloved children. – Ephesians 5:1",
  reflection: "Imitation begins with intimacy."
},
{
  text: "You are not forgotten. – Isaiah 49:15–16",
  reflection: "You are engraved on grace itself."
},
{
  text: "You are not a mistake, for all your days were written before one came to be. – Psalm 139:16",
  reflection: "You are not random. You are remembered."
},
{
  text: "Let us not become conceited, provoking one another. – Galatians 5:26",
  reflection: "Pride divides. Humility invites."
},
{
  text: "You are called to be holy, just as He is holy. – 1 Peter 1:16",
  reflection: "Holiness is not perfection. It’s presence."
},
{
  text: "Let us walk in step with the Spirit. – Galatians 5:25",
  reflection: "The Spirit doesn’t rush. It walks beside you."
},
{
  text: "You are known by name. – Isaiah 43:1",
  reflection: "You are not a number. You are a name spoken in love."
},
{
  text: "Let us not repay evil for evil. – Romans 12:17",
  reflection: "Goodness is resistance, not passivity."
},
{
  text: "You are accepted in the Beloved. – Ephesians 1:6",
  reflection: "Acceptance is not earned. It’s inherited."
},
{
  text: "Let us be devoted to one another in love. – Romans 12:10",
  reflection: "Devotion is love that stays."
},
{
  text: "You are seated with Christ in heavenly places. – Ephesians 2:6",
  reflection: "Your worth is not earthly. It’s eternal."
},
{
  text: "Let us clothe ourselves with compassion. – Colossians 3:12",
  reflection: "Compassion is the fabric of grace."
},
{
  text: "You are not condemned. – Romans 8:1",
  reflection: "Grace silences every accusation."
},
{
  text: "Let us be faithful in small things. – Luke 16:10",
  reflection: "Small faithfulness builds eternal legacy."
},
{
  text: "You are a branch of the true vine. – John 15:5",
  reflection: "You are connected to life itself."
},
{
  text: "Let us not boast, except in the cross. – Galatians 6:14",
  reflection: "The cross is not a symbol. It’s a story of love."
},
{
  text: "You are heirs of the promise. – Galatians 3:29",
  reflection: "Inheritance is not earned. It’s received."
},
{
  text: "Let us be gentle and show true humility. – Titus 3:2",
  reflection: "Gentleness is strength softened by grace."
},
{
  text: "You are part of a royal priesthood. – 1 Peter 2:9",
  reflection: "Royalty in God’s kingdom wears humility."
},
{
  text: "Let us not be anxious about anything. – Philippians 4:6",
  reflection: "Peace begins where anxiety ends."
},
{
  text: "You are called out of darkness into light. – 1 Peter 2:9",
  reflection: "Your story begins in light, not shame."
},
{
  text: "Let us fix our eyes on Jesus. – Hebrews 12:2",
  reflection: "Focus brings freedom."
},
{
  text: "You are being renewed day by day. – 2 Corinthians 4:16",
  reflection: "Renewal is not a moment. It’s a rhythm."
},
{
  text: "Let us be quick to forgive. – Matthew 6:14",
  reflection: "Forgiveness frees both the giver and the receiver."
},
{
  text: "You are a temple of the Holy Spirit. – 1 Corinthians 6:19",
  reflection: "Sacredness lives in you."
},
{
  text: "Let us walk by faith, not by sight. – 2 Corinthians 5:7",
  reflection: "Faith sees what eyes cannot."
},
{
  text: "You are chosen before the foundation of the world. – Ephesians 1:4",
  reflection: "Your story started in eternity."
},
{
  text: "Let us be peacemakers. – Matthew 5:9",
  reflection: "Peace is not passive. It’s powerful."
},
{
  text: "You are loved with an everlasting love. – Jeremiah 31:3",
  reflection: "Everlasting means never-ending, never-fading."
},
{
  text: "Let us be rooted and grounded in love. – Ephesians 3:17",
  reflection: "Roots in love grow fruit in grace."
},
{
  text: "You are not far from the kingdom of God. – Mark 12:34",
  reflection: "The kingdom is closer than you think."
},
{
  text: "Let us be strong and courageous. – Joshua 1:9",
  reflection: "Courage is not the absence of fear. It’s the presence of faith."
},
{
  text: "You are called to shine like stars. – Philippians 2:15",
  reflection: "Your light was meant for the night."
},
{
  text: "Let us be filled with the Spirit. – Ephesians 5:18",
  reflection: "Filling begins with surrender."
},
{
  text: "You are not defined by your past. – Isaiah 43:18–19",
  reflection: "God is doing a new thing — in you."
},
{
  text: "Let us be patient in affliction. – Romans 12:12",
  reflection: "Patience is strength stretched by hope."
},
{
  text: "You are called to be light in the Lord. – Ephesians 5:8",
  reflection: "Light doesn’t compete. It simply shines."
},
{
  text: "Let us be joyful in hope. – Romans 12:12",
  reflection: "Hope dances even in the dark."
},
{
  text: "You are not forsaken. – Psalm 37:28",
  reflection: "God’s presence is permanent."
},
{
  text: "Let us be rich in good deeds. – 1 Timothy 6:18",
  reflection: "Richness is measured in kindness."
},
{
  text: "You are called to be free. – Galatians 5:13",
  reflection: "Freedom is not rebellion. It’s restoration."
},
{
  text: "Let us be content with what we have. – Hebrews 13:5",
  reflection: "Contentment is quiet confidence."
},
{
  text: "You are held in everlasting arms. – Deuteronomy 33:27",
  reflection: "You are not just safe. You are embraced."
},
{
  text: "Let us be alert and sober-minded. – 1 Peter 5:8",
  reflection: "Awareness is spiritual wisdom."
},
{
  text: "You are written on the palms of His hands. – Isaiah 49:16",
  reflection: "You are remembered in every gesture of grace."
},
{
  text: "Let us be faithful stewards. – 1 Corinthians 4:2",
  reflection: "Faithfulness is fruit grown in quiet soil."
},
{
  text: "You are called to reflect His glory. – 2 Corinthians 3:18",
  reflection: "You are a mirror of mercy."
},
{
  text: "Let us be thankful in all circumstances. – 1 Thessalonians 5:18",
  reflection: "Gratitude is grace in motion."
},
{
  text: "You are part of God’s family. – Ephesians 2:19",
  reflection: "Family is not blood. It’s belonging."
},
{
  text: "Let us be filled with compassion. – Colossians 3:12",
  reflection: "Compassion is love that listens."
},
{
  text: "You are called by name. – Isaiah 43:1",
  reflection: "Your name is not forgotten. It’s spoken in love."
},
{
  text: "Let us be doers of the word. – James 1:22",
  reflection: "Faith walks. It doesn’t just talk."
},
{
  text: "You are made in His image. – Genesis 1:27",
  reflection: "You reflect divine beauty."
},
{
  text: "Let us be united in spirit and purpose. – Philippians 2:2",
  reflection: "Unity is not sameness. It’s shared grace."
},
{
  text: "You are never beyond grace. – Romans 5:20",
  reflection: "Grace goes where guilt cannot."
},
{
  text: "Let us be people of peace. – Romans 12:18",
  reflection: "Peace is not passive. It’s a practice."
},
{
  text: "You are loved. Always. – John 15:9",
  reflection: "Love is not seasonal. It’s eternal."
},
{
  text: "You are all members of one body. – 1 Corinthians 12:27",
  reflection: "Belonging is not earned. It’s shared."
},
{
  text: "God does not show favoritism but accepts from every nation. – Acts 10:34–35",
  reflection: "Acceptance is not selective. It’s divine."
},
{
  text: "You are called to live in peace. – Colossians 3:15",
  reflection: "Peace is not passive. It’s a calling."
},
{
  text: "There is no longer Jew or Greek... for you are all one in Christ Jesus. – Galatians 3:28",
  reflection: "Unity doesn’t erase difference. It honors it."
},
{
  text: "You are part of a great multitude from every tribe and language. – Revelation 7:9",
  reflection: "Diversity is not a challenge. It’s a celebration."
},
{
  text: "Accept one another, just as Christ accepted you. – Romans 15:7",
  reflection: "Acceptance is not approval. It’s love in action."
},
{
  text: "You are all baptized by one Spirit into one body. – 1 Corinthians 12:13",
  reflection: "The Spirit doesn’t divide. It unites."
},
{
  text: "There is no difference between Jew and Gentile... the same Lord is Lord of all. – Romans 10:12",
  reflection: "God’s grace doesn’t check credentials."
},
{
  text: "You are loved because He first loved us. – 1 John 4:19",
  reflection: "Love begins with God and flows through you."
},
{
  text: "You are invited to the table. – Luke 14:23",
  reflection: "Invitation is not earned. It’s extended."
}


];


function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function displayVerse() {
  const currentIndex = getDayOfYear() % verses.length;
  const verse = verses[currentIndex];
  document.getElementById("verse-text").textContent = verse.text;
  document.getElementById("reflection-text").textContent = verse.reflection;
  document.getElementById("date").textContent = new Date().toDateString();
}

window.onload = displayVerse;
