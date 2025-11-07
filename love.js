var c = 0;

var when = ["rest your head on my shoulder", "remember me", "intertwine your fingers with mine", "go to sleep with me", "listen to me as I talk senseless", "call me Veven", "succeed", "smile", "download and send me TikToks", "say \"RAAAAAH\"", "remember who I need to message back for me", "are with me", "send me something that made you smile", "know exactly what to say", "look at me in silence and just see", "are there for me", "pray", "tell me about what you believe in, including me", "stay with me at a cafe for hours", "are honest when you don't know what to say", "fix my hair for me", "dance for me", "show me what your brothers has been up to", "take pictures", "look through your camera roll", "speak, and say 'i love you' so many times without even knowing", "tell me about your day", "show me what you did for class", "feel good about yourself", "bring me along", "invite me explicitly to every little thing", "trust that I can carry this world with you", "offer to pay for my food (even though you know that I won't let you)", "tell other people about me &mdash; and the love that comes through indirectly", "are loved by all your friends", "think of yourself as ordinary and ugly—the complete opposite of all these things", "squeeze my hand tighter to nudge me", "check in on me", "are conscious of me", "hug me", "follow through with all the plans and promises we have", "make me feel all this love", "pull me back in for a little longer when we're about to say goodbye", "reveal a secret Spotify playlist you've hidden from your profile (aka the playlist that is forever mine to keep)", "text me even if you're at the dinner table", "do our dailies (aka Wordle and Strands)", "send me videos of yourself, cheering me on", "send me things that make you think of me", "tag me and say \"us\"", "tell me what a word means in your language", "rest your hand on my thigh", "walk me to the station (and most of the time, it's Vito Cruz)", "tell me about what you were like when you were younger", "let me try your food", "pause in conversation until you can get your thoughts together", "have your voice shift a little as you speak to me &mdash; and only me", "tell me that I can do anything", "talk so deeply and lucidly about the things you care about", "have your influences slowly become mine and vice-versa", "let your body crash into mine", "tell me about your day", "offer to fight other people for me", "get excited about something new", "organize your bookmarks folder", "open Google Map to know which direction we'll walk to", "are present in any form", "tell me about all your wins, tiny or huge", "follow all the accounts for my random side projects, even if I don't end up doing anything with them", "are near me", "stay up late with me", "call me over Discord for hours", "tell me about how other people have loved (or not loved) you, too", "sit at the back of the P2P bus with me", "watch the newest OTV YouTube video with me", "mispronounce words", "ask me what a certain deep Filipino word means", "let your full body weight rest on me when we're leaning against each other", "ask me if you can have my hand", "tell me stories that I've heard a dozen times (and I want to hear them again and again)", "yap on about photography", "message me as soon I drop you off", "trust me with your fears", "tell me I make you safe", "sit in silence with me", "always like and reply to my IG stories", "tell me to come over", "try to make things work (even if they don't end up doing so)", "are yourself", "help me feel not disassociate", "run up to hug me even if we've just seen each other a few days ago", "send me pictures of your dogs, most especially Vivi and Bella", "tell me about your family", "tell me about the family that you want", "call me these tiny words of endearment", "can sense that something's wrong, you know me", "indulge in my dreams, as I do yours", "tell me that you'll adjust (and actually do)", "always come back to me", "tell me to bother you", "never think of me as a broken thing", "read my text blocks, suffer through my proper punctuations", "use words you have to explain the definition of", "go on walks with me", "sit with me", "get giddy", "send me a long message if I fell asleep before you do", "know my dosage better than I do", "stay up for every call", "know which days are hardest, stand with me through it all", "make me coffee"];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
    shuffle(when);
});

$(document).click(function (e) {

    if (e.button == 0) {

        $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

        c++;

        if (c == when.length) {

            $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

            setTimeout(function () {
                $("#when-you").empty();  // Remove all previous lines
                $("<p>say yes to being my girlfriend?</p>").hide().prependTo("#when-you").fadeIn(2000);
            }, 2200); // Slightly after the previous fade-in finishes

            $("body").css('background', '#000');
            $("#g").css('color', '#fff');

            $(document).unbind("click");
        }

    }
});
