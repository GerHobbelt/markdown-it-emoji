/*! markdown-it-emoji 1.4.0-7 https://github.com//GerHobbelt/markdown-it-emoji @license MIT */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.markdownitEmoji = factory());
}(this, (function () { 'use strict';

  var grinning = "😀";
  var smiley = "😃";
  var smile = "😄";
  var grin = "😁";
  var laughing = "😆";
  var satisfied = "😆";
  var sweat_smile = "😅";
  var rofl = "🤣";
  var joy = "😂";
  var slightly_smiling_face = "🙂";
  var upside_down_face = "🙃";
  var wink = "😉";
  var blush = "😊";
  var innocent = "😇";
  var smiling_face_with_three_hearts = "🥰";
  var heart_eyes = "😍";
  var star_struck = "🤩";
  var kissing_heart = "😘";
  var kissing = "😗";
  var relaxed = "☺️";
  var kissing_closed_eyes = "😚";
  var kissing_smiling_eyes = "😙";
  var smiling_face_with_tear = "🥲";
  var yum = "😋";
  var stuck_out_tongue = "😛";
  var stuck_out_tongue_winking_eye = "😜";
  var zany_face = "🤪";
  var stuck_out_tongue_closed_eyes = "😝";
  var money_mouth_face = "🤑";
  var hugs = "🤗";
  var hand_over_mouth = "🤭";
  var shushing_face = "🤫";
  var thinking = "🤔";
  var zipper_mouth_face = "🤐";
  var raised_eyebrow = "🤨";
  var neutral_face = "😐";
  var expressionless = "😑";
  var no_mouth = "😶";
  var smirk = "😏";
  var unamused = "😒";
  var roll_eyes = "🙄";
  var grimacing = "😬";
  var lying_face = "🤥";
  var relieved = "😌";
  var pensive = "😔";
  var sleepy = "😪";
  var drooling_face = "🤤";
  var sleeping = "😴";
  var mask = "😷";
  var face_with_thermometer = "🤒";
  var face_with_head_bandage = "🤕";
  var nauseated_face = "🤢";
  var vomiting_face = "🤮";
  var sneezing_face = "🤧";
  var hot_face = "🥵";
  var cold_face = "🥶";
  var woozy_face = "🥴";
  var dizzy_face = "😵";
  var exploding_head = "🤯";
  var cowboy_hat_face = "🤠";
  var partying_face = "🥳";
  var disguised_face = "🥸";
  var sunglasses = "😎";
  var nerd_face = "🤓";
  var monocle_face = "🧐";
  var confused = "😕";
  var worried = "😟";
  var slightly_frowning_face = "🙁";
  var frowning_face = "☹️";
  var open_mouth = "😮";
  var hushed = "😯";
  var astonished = "😲";
  var flushed = "😳";
  var pleading_face = "🥺";
  var frowning = "😦";
  var anguished = "😧";
  var fearful = "😨";
  var cold_sweat = "😰";
  var disappointed_relieved = "😥";
  var cry = "😢";
  var sob = "😭";
  var scream = "😱";
  var confounded = "😖";
  var persevere = "😣";
  var disappointed = "😞";
  var sweat = "😓";
  var weary = "😩";
  var tired_face = "😫";
  var yawning_face = "🥱";
  var triumph = "😤";
  var rage = "😡";
  var pout = "😡";
  var angry = "😠";
  var cursing_face = "🤬";
  var smiling_imp = "😈";
  var imp = "👿";
  var skull = "💀";
  var skull_and_crossbones = "☠️";
  var hankey = "💩";
  var poop = "💩";
  var shit = "💩";
  var clown_face = "🤡";
  var japanese_ogre = "👹";
  var japanese_goblin = "👺";
  var ghost = "👻";
  var alien = "👽";
  var space_invader = "👾";
  var robot = "🤖";
  var smiley_cat = "😺";
  var smile_cat = "😸";
  var joy_cat = "😹";
  var heart_eyes_cat = "😻";
  var smirk_cat = "😼";
  var kissing_cat = "😽";
  var scream_cat = "🙀";
  var crying_cat_face = "😿";
  var pouting_cat = "😾";
  var see_no_evil = "🙈";
  var hear_no_evil = "🙉";
  var speak_no_evil = "🙊";
  var kiss = "💋";
  var love_letter = "💌";
  var cupid = "💘";
  var gift_heart = "💝";
  var sparkling_heart = "💖";
  var heartpulse = "💗";
  var heartbeat = "💓";
  var revolving_hearts = "💞";
  var two_hearts = "💕";
  var heart_decoration = "💟";
  var heavy_heart_exclamation = "❣️";
  var broken_heart = "💔";
  var heart = "❤️";
  var orange_heart = "🧡";
  var yellow_heart = "💛";
  var green_heart = "💚";
  var blue_heart = "💙";
  var purple_heart = "💜";
  var brown_heart = "🤎";
  var black_heart = "🖤";
  var white_heart = "🤍";
  var anger = "💢";
  var boom = "💥";
  var collision = "💥";
  var dizzy = "💫";
  var sweat_drops = "💦";
  var dash = "💨";
  var hole = "🕳️";
  var bomb = "💣";
  var speech_balloon = "💬";
  var eye_speech_bubble = "👁️‍🗨️";
  var left_speech_bubble = "🗨️";
  var right_anger_bubble = "🗯️";
  var thought_balloon = "💭";
  var zzz = "💤";
  var wave = "👋";
  var raised_back_of_hand = "🤚";
  var raised_hand_with_fingers_splayed = "🖐️";
  var hand = "✋";
  var raised_hand = "✋";
  var vulcan_salute = "🖖";
  var ok_hand = "👌";
  var pinched_fingers = "🤌";
  var pinching_hand = "🤏";
  var v = "✌️";
  var crossed_fingers = "🤞";
  var love_you_gesture = "🤟";
  var metal = "🤘";
  var call_me_hand = "🤙";
  var point_left = "👈";
  var point_right = "👉";
  var point_up_2 = "👆";
  var middle_finger = "🖕";
  var fu = "🖕";
  var point_down = "👇";
  var point_up = "☝️";
  var thumbsup = "👍";
  var thumbsdown = "👎";
  var fist_raised = "✊";
  var fist = "✊";
  var fist_oncoming = "👊";
  var facepunch = "👊";
  var punch = "👊";
  var fist_left = "🤛";
  var fist_right = "🤜";
  var clap = "👏";
  var raised_hands = "🙌";
  var open_hands = "👐";
  var palms_up_together = "🤲";
  var handshake = "🤝";
  var pray = "🙏";
  var writing_hand = "✍️";
  var nail_care = "💅";
  var selfie = "🤳";
  var muscle = "💪";
  var mechanical_arm = "🦾";
  var mechanical_leg = "🦿";
  var leg = "🦵";
  var foot = "🦶";
  var ear = "👂";
  var ear_with_hearing_aid = "🦻";
  var nose = "👃";
  var brain = "🧠";
  var anatomical_heart = "🫀";
  var lungs = "🫁";
  var tooth = "🦷";
  var bone = "🦴";
  var eyes = "👀";
  var eye = "👁️";
  var tongue = "👅";
  var lips = "👄";
  var baby = "👶";
  var child = "🧒";
  var boy = "👦";
  var girl = "👧";
  var adult = "🧑";
  var blond_haired_person = "👱";
  var man = "👨";
  var bearded_person = "🧔";
  var red_haired_man = "👨‍🦰";
  var curly_haired_man = "👨‍🦱";
  var white_haired_man = "👨‍🦳";
  var bald_man = "👨‍🦲";
  var woman = "👩";
  var red_haired_woman = "👩‍🦰";
  var person_red_hair = "🧑‍🦰";
  var curly_haired_woman = "👩‍🦱";
  var person_curly_hair = "🧑‍🦱";
  var white_haired_woman = "👩‍🦳";
  var person_white_hair = "🧑‍🦳";
  var bald_woman = "👩‍🦲";
  var person_bald = "🧑‍🦲";
  var blond_haired_woman = "👱‍♀️";
  var blonde_woman = "👱‍♀️";
  var blond_haired_man = "👱‍♂️";
  var older_adult = "🧓";
  var older_man = "👴";
  var older_woman = "👵";
  var frowning_person = "🙍";
  var frowning_man = "🙍‍♂️";
  var frowning_woman = "🙍‍♀️";
  var pouting_face = "🙎";
  var pouting_man = "🙎‍♂️";
  var pouting_woman = "🙎‍♀️";
  var no_good = "🙅";
  var no_good_man = "🙅‍♂️";
  var ng_man = "🙅‍♂️";
  var no_good_woman = "🙅‍♀️";
  var ng_woman = "🙅‍♀️";
  var ok_person = "🙆";
  var ok_man = "🙆‍♂️";
  var ok_woman = "🙆‍♀️";
  var tipping_hand_person = "💁";
  var information_desk_person = "💁";
  var tipping_hand_man = "💁‍♂️";
  var sassy_man = "💁‍♂️";
  var tipping_hand_woman = "💁‍♀️";
  var sassy_woman = "💁‍♀️";
  var raising_hand = "🙋";
  var raising_hand_man = "🙋‍♂️";
  var raising_hand_woman = "🙋‍♀️";
  var deaf_person = "🧏";
  var deaf_man = "🧏‍♂️";
  var deaf_woman = "🧏‍♀️";
  var bow = "🙇";
  var bowing_man = "🙇‍♂️";
  var bowing_woman = "🙇‍♀️";
  var facepalm = "🤦";
  var man_facepalming = "🤦‍♂️";
  var woman_facepalming = "🤦‍♀️";
  var shrug = "🤷";
  var man_shrugging = "🤷‍♂️";
  var woman_shrugging = "🤷‍♀️";
  var health_worker = "🧑‍⚕️";
  var man_health_worker = "👨‍⚕️";
  var woman_health_worker = "👩‍⚕️";
  var student = "🧑‍🎓";
  var man_student = "👨‍🎓";
  var woman_student = "👩‍🎓";
  var teacher = "🧑‍🏫";
  var man_teacher = "👨‍🏫";
  var woman_teacher = "👩‍🏫";
  var judge = "🧑‍⚖️";
  var man_judge = "👨‍⚖️";
  var woman_judge = "👩‍⚖️";
  var farmer = "🧑‍🌾";
  var man_farmer = "👨‍🌾";
  var woman_farmer = "👩‍🌾";
  var cook = "🧑‍🍳";
  var man_cook = "👨‍🍳";
  var woman_cook = "👩‍🍳";
  var mechanic = "🧑‍🔧";
  var man_mechanic = "👨‍🔧";
  var woman_mechanic = "👩‍🔧";
  var factory_worker = "🧑‍🏭";
  var man_factory_worker = "👨‍🏭";
  var woman_factory_worker = "👩‍🏭";
  var office_worker = "🧑‍💼";
  var man_office_worker = "👨‍💼";
  var woman_office_worker = "👩‍💼";
  var scientist = "🧑‍🔬";
  var man_scientist = "👨‍🔬";
  var woman_scientist = "👩‍🔬";
  var technologist = "🧑‍💻";
  var man_technologist = "👨‍💻";
  var woman_technologist = "👩‍💻";
  var singer = "🧑‍🎤";
  var man_singer = "👨‍🎤";
  var woman_singer = "👩‍🎤";
  var artist = "🧑‍🎨";
  var man_artist = "👨‍🎨";
  var woman_artist = "👩‍🎨";
  var pilot = "🧑‍✈️";
  var man_pilot = "👨‍✈️";
  var woman_pilot = "👩‍✈️";
  var astronaut = "🧑‍🚀";
  var man_astronaut = "👨‍🚀";
  var woman_astronaut = "👩‍🚀";
  var firefighter = "🧑‍🚒";
  var man_firefighter = "👨‍🚒";
  var woman_firefighter = "👩‍🚒";
  var police_officer = "👮";
  var cop = "👮";
  var policeman = "👮‍♂️";
  var policewoman = "👮‍♀️";
  var detective = "🕵️";
  var male_detective = "🕵️‍♂️";
  var female_detective = "🕵️‍♀️";
  var guard = "💂";
  var guardsman = "💂‍♂️";
  var guardswoman = "💂‍♀️";
  var ninja = "🥷";
  var construction_worker = "👷";
  var construction_worker_man = "👷‍♂️";
  var construction_worker_woman = "👷‍♀️";
  var prince = "🤴";
  var princess = "👸";
  var person_with_turban = "👳";
  var man_with_turban = "👳‍♂️";
  var woman_with_turban = "👳‍♀️";
  var man_with_gua_pi_mao = "👲";
  var woman_with_headscarf = "🧕";
  var person_in_tuxedo = "🤵";
  var man_in_tuxedo = "🤵‍♂️";
  var woman_in_tuxedo = "🤵‍♀️";
  var person_with_veil = "👰";
  var man_with_veil = "👰‍♂️";
  var woman_with_veil = "👰‍♀️";
  var bride_with_veil = "👰‍♀️";
  var pregnant_woman = "🤰";
  var breast_feeding = "🤱";
  var woman_feeding_baby = "👩‍🍼";
  var man_feeding_baby = "👨‍🍼";
  var person_feeding_baby = "🧑‍🍼";
  var angel = "👼";
  var santa = "🎅";
  var mrs_claus = "🤶";
  var mx_claus = "🧑‍🎄";
  var superhero = "🦸";
  var superhero_man = "🦸‍♂️";
  var superhero_woman = "🦸‍♀️";
  var supervillain = "🦹";
  var supervillain_man = "🦹‍♂️";
  var supervillain_woman = "🦹‍♀️";
  var mage = "🧙";
  var mage_man = "🧙‍♂️";
  var mage_woman = "🧙‍♀️";
  var fairy = "🧚";
  var fairy_man = "🧚‍♂️";
  var fairy_woman = "🧚‍♀️";
  var vampire = "🧛";
  var vampire_man = "🧛‍♂️";
  var vampire_woman = "🧛‍♀️";
  var merperson = "🧜";
  var merman = "🧜‍♂️";
  var mermaid = "🧜‍♀️";
  var elf = "🧝";
  var elf_man = "🧝‍♂️";
  var elf_woman = "🧝‍♀️";
  var genie = "🧞";
  var genie_man = "🧞‍♂️";
  var genie_woman = "🧞‍♀️";
  var zombie = "🧟";
  var zombie_man = "🧟‍♂️";
  var zombie_woman = "🧟‍♀️";
  var massage = "💆";
  var massage_man = "💆‍♂️";
  var massage_woman = "💆‍♀️";
  var haircut = "💇";
  var haircut_man = "💇‍♂️";
  var haircut_woman = "💇‍♀️";
  var walking = "🚶";
  var walking_man = "🚶‍♂️";
  var walking_woman = "🚶‍♀️";
  var standing_person = "🧍";
  var standing_man = "🧍‍♂️";
  var standing_woman = "🧍‍♀️";
  var kneeling_person = "🧎";
  var kneeling_man = "🧎‍♂️";
  var kneeling_woman = "🧎‍♀️";
  var person_with_probing_cane = "🧑‍🦯";
  var man_with_probing_cane = "👨‍🦯";
  var woman_with_probing_cane = "👩‍🦯";
  var person_in_motorized_wheelchair = "🧑‍🦼";
  var man_in_motorized_wheelchair = "👨‍🦼";
  var woman_in_motorized_wheelchair = "👩‍🦼";
  var person_in_manual_wheelchair = "🧑‍🦽";
  var man_in_manual_wheelchair = "👨‍🦽";
  var woman_in_manual_wheelchair = "👩‍🦽";
  var runner = "🏃";
  var running = "🏃";
  var running_man = "🏃‍♂️";
  var running_woman = "🏃‍♀️";
  var woman_dancing = "💃";
  var dancer = "💃";
  var man_dancing = "🕺";
  var business_suit_levitating = "🕴️";
  var dancers = "👯";
  var dancing_men = "👯‍♂️";
  var dancing_women = "👯‍♀️";
  var sauna_person = "🧖";
  var sauna_man = "🧖‍♂️";
  var sauna_woman = "🧖‍♀️";
  var climbing = "🧗";
  var climbing_man = "🧗‍♂️";
  var climbing_woman = "🧗‍♀️";
  var person_fencing = "🤺";
  var horse_racing = "🏇";
  var skier = "⛷️";
  var snowboarder = "🏂";
  var golfing = "🏌️";
  var golfing_man = "🏌️‍♂️";
  var golfing_woman = "🏌️‍♀️";
  var surfer = "🏄";
  var surfing_man = "🏄‍♂️";
  var surfing_woman = "🏄‍♀️";
  var rowboat = "🚣";
  var rowing_man = "🚣‍♂️";
  var rowing_woman = "🚣‍♀️";
  var swimmer = "🏊";
  var swimming_man = "🏊‍♂️";
  var swimming_woman = "🏊‍♀️";
  var bouncing_ball_person = "⛹️";
  var bouncing_ball_man = "⛹️‍♂️";
  var basketball_man = "⛹️‍♂️";
  var bouncing_ball_woman = "⛹️‍♀️";
  var basketball_woman = "⛹️‍♀️";
  var weight_lifting = "🏋️";
  var weight_lifting_man = "🏋️‍♂️";
  var weight_lifting_woman = "🏋️‍♀️";
  var bicyclist = "🚴";
  var biking_man = "🚴‍♂️";
  var biking_woman = "🚴‍♀️";
  var mountain_bicyclist = "🚵";
  var mountain_biking_man = "🚵‍♂️";
  var mountain_biking_woman = "🚵‍♀️";
  var cartwheeling = "🤸";
  var man_cartwheeling = "🤸‍♂️";
  var woman_cartwheeling = "🤸‍♀️";
  var wrestling = "🤼";
  var men_wrestling = "🤼‍♂️";
  var women_wrestling = "🤼‍♀️";
  var water_polo = "🤽";
  var man_playing_water_polo = "🤽‍♂️";
  var woman_playing_water_polo = "🤽‍♀️";
  var handball_person = "🤾";
  var man_playing_handball = "🤾‍♂️";
  var woman_playing_handball = "🤾‍♀️";
  var juggling_person = "🤹";
  var man_juggling = "🤹‍♂️";
  var woman_juggling = "🤹‍♀️";
  var lotus_position = "🧘";
  var lotus_position_man = "🧘‍♂️";
  var lotus_position_woman = "🧘‍♀️";
  var bath = "🛀";
  var sleeping_bed = "🛌";
  var people_holding_hands = "🧑‍🤝‍🧑";
  var two_women_holding_hands = "👭";
  var couple = "👫";
  var two_men_holding_hands = "👬";
  var couplekiss = "💏";
  var couplekiss_man_woman = "👩‍❤️‍💋‍👨";
  var couplekiss_man_man = "👨‍❤️‍💋‍👨";
  var couplekiss_woman_woman = "👩‍❤️‍💋‍👩";
  var couple_with_heart = "💑";
  var couple_with_heart_woman_man = "👩‍❤️‍👨";
  var couple_with_heart_man_man = "👨‍❤️‍👨";
  var couple_with_heart_woman_woman = "👩‍❤️‍👩";
  var family = "👪";
  var family_man_woman_boy = "👨‍👩‍👦";
  var family_man_woman_girl = "👨‍👩‍👧";
  var family_man_woman_girl_boy = "👨‍👩‍👧‍👦";
  var family_man_woman_boy_boy = "👨‍👩‍👦‍👦";
  var family_man_woman_girl_girl = "👨‍👩‍👧‍👧";
  var family_man_man_boy = "👨‍👨‍👦";
  var family_man_man_girl = "👨‍👨‍👧";
  var family_man_man_girl_boy = "👨‍👨‍👧‍👦";
  var family_man_man_boy_boy = "👨‍👨‍👦‍👦";
  var family_man_man_girl_girl = "👨‍👨‍👧‍👧";
  var family_woman_woman_boy = "👩‍👩‍👦";
  var family_woman_woman_girl = "👩‍👩‍👧";
  var family_woman_woman_girl_boy = "👩‍👩‍👧‍👦";
  var family_woman_woman_boy_boy = "👩‍👩‍👦‍👦";
  var family_woman_woman_girl_girl = "👩‍👩‍👧‍👧";
  var family_man_boy = "👨‍👦";
  var family_man_boy_boy = "👨‍👦‍👦";
  var family_man_girl = "👨‍👧";
  var family_man_girl_boy = "👨‍👧‍👦";
  var family_man_girl_girl = "👨‍👧‍👧";
  var family_woman_boy = "👩‍👦";
  var family_woman_boy_boy = "👩‍👦‍👦";
  var family_woman_girl = "👩‍👧";
  var family_woman_girl_boy = "👩‍👧‍👦";
  var family_woman_girl_girl = "👩‍👧‍👧";
  var speaking_head = "🗣️";
  var bust_in_silhouette = "👤";
  var busts_in_silhouette = "👥";
  var people_hugging = "🫂";
  var footprints = "👣";
  var monkey_face = "🐵";
  var monkey = "🐒";
  var gorilla = "🦍";
  var orangutan = "🦧";
  var dog = "🐶";
  var dog2 = "🐕";
  var guide_dog = "🦮";
  var service_dog = "🐕‍🦺";
  var poodle = "🐩";
  var wolf = "🐺";
  var fox_face = "🦊";
  var raccoon = "🦝";
  var cat = "🐱";
  var cat2 = "🐈";
  var black_cat = "🐈‍⬛";
  var lion = "🦁";
  var tiger = "🐯";
  var tiger2 = "🐅";
  var leopard = "🐆";
  var horse = "🐴";
  var racehorse = "🐎";
  var unicorn = "🦄";
  var zebra = "🦓";
  var deer = "🦌";
  var bison = "🦬";
  var cow = "🐮";
  var ox = "🐂";
  var water_buffalo = "🐃";
  var cow2 = "🐄";
  var pig = "🐷";
  var pig2 = "🐖";
  var boar = "🐗";
  var pig_nose = "🐽";
  var ram = "🐏";
  var sheep = "🐑";
  var goat = "🐐";
  var dromedary_camel = "🐪";
  var camel = "🐫";
  var llama = "🦙";
  var giraffe = "🦒";
  var elephant = "🐘";
  var mammoth = "🦣";
  var rhinoceros = "🦏";
  var hippopotamus = "🦛";
  var mouse = "🐭";
  var mouse2 = "🐁";
  var rat = "🐀";
  var hamster = "🐹";
  var rabbit = "🐰";
  var rabbit2 = "🐇";
  var chipmunk = "🐿️";
  var beaver = "🦫";
  var hedgehog = "🦔";
  var bat = "🦇";
  var bear = "🐻";
  var polar_bear = "🐻‍❄️";
  var koala = "🐨";
  var panda_face = "🐼";
  var sloth = "🦥";
  var otter = "🦦";
  var skunk = "🦨";
  var kangaroo = "🦘";
  var badger = "🦡";
  var feet = "🐾";
  var paw_prints = "🐾";
  var turkey = "🦃";
  var chicken = "🐔";
  var rooster = "🐓";
  var hatching_chick = "🐣";
  var baby_chick = "🐤";
  var hatched_chick = "🐥";
  var bird = "🐦";
  var penguin = "🐧";
  var dove = "🕊️";
  var eagle = "🦅";
  var duck = "🦆";
  var swan = "🦢";
  var owl = "🦉";
  var dodo = "🦤";
  var feather = "🪶";
  var flamingo = "🦩";
  var peacock = "🦚";
  var parrot = "🦜";
  var frog = "🐸";
  var crocodile = "🐊";
  var turtle = "🐢";
  var lizard = "🦎";
  var snake = "🐍";
  var dragon_face = "🐲";
  var dragon = "🐉";
  var sauropod = "🦕";
  var whale = "🐳";
  var whale2 = "🐋";
  var dolphin = "🐬";
  var flipper = "🐬";
  var seal = "🦭";
  var fish = "🐟";
  var tropical_fish = "🐠";
  var blowfish = "🐡";
  var shark = "🦈";
  var octopus = "🐙";
  var shell = "🐚";
  var snail = "🐌";
  var butterfly = "🦋";
  var bug = "🐛";
  var ant = "🐜";
  var bee = "🐝";
  var honeybee = "🐝";
  var beetle = "🪲";
  var lady_beetle = "🐞";
  var cricket = "🦗";
  var cockroach = "🪳";
  var spider = "🕷️";
  var spider_web = "🕸️";
  var scorpion = "🦂";
  var mosquito = "🦟";
  var fly = "🪰";
  var worm = "🪱";
  var microbe = "🦠";
  var bouquet = "💐";
  var cherry_blossom = "🌸";
  var white_flower = "💮";
  var rosette = "🏵️";
  var rose = "🌹";
  var wilted_flower = "🥀";
  var hibiscus = "🌺";
  var sunflower = "🌻";
  var blossom = "🌼";
  var tulip = "🌷";
  var seedling = "🌱";
  var potted_plant = "🪴";
  var evergreen_tree = "🌲";
  var deciduous_tree = "🌳";
  var palm_tree = "🌴";
  var cactus = "🌵";
  var ear_of_rice = "🌾";
  var herb = "🌿";
  var shamrock = "☘️";
  var four_leaf_clover = "🍀";
  var maple_leaf = "🍁";
  var fallen_leaf = "🍂";
  var leaves = "🍃";
  var grapes = "🍇";
  var melon = "🍈";
  var watermelon = "🍉";
  var tangerine = "🍊";
  var orange = "🍊";
  var mandarin = "🍊";
  var lemon = "🍋";
  var banana = "🍌";
  var pineapple = "🍍";
  var mango = "🥭";
  var apple = "🍎";
  var green_apple = "🍏";
  var pear = "🍐";
  var peach = "🍑";
  var cherries = "🍒";
  var strawberry = "🍓";
  var blueberries = "🫐";
  var kiwi_fruit = "🥝";
  var tomato = "🍅";
  var olive = "🫒";
  var coconut = "🥥";
  var avocado = "🥑";
  var eggplant = "🍆";
  var potato = "🥔";
  var carrot = "🥕";
  var corn = "🌽";
  var hot_pepper = "🌶️";
  var bell_pepper = "🫑";
  var cucumber = "🥒";
  var leafy_green = "🥬";
  var broccoli = "🥦";
  var garlic = "🧄";
  var onion = "🧅";
  var mushroom = "🍄";
  var peanuts = "🥜";
  var chestnut = "🌰";
  var bread = "🍞";
  var croissant = "🥐";
  var baguette_bread = "🥖";
  var flatbread = "🫓";
  var pretzel = "🥨";
  var bagel = "🥯";
  var pancakes = "🥞";
  var waffle = "🧇";
  var cheese = "🧀";
  var meat_on_bone = "🍖";
  var poultry_leg = "🍗";
  var cut_of_meat = "🥩";
  var bacon = "🥓";
  var hamburger = "🍔";
  var fries = "🍟";
  var pizza = "🍕";
  var hotdog = "🌭";
  var sandwich = "🥪";
  var taco = "🌮";
  var burrito = "🌯";
  var tamale = "🫔";
  var stuffed_flatbread = "🥙";
  var falafel = "🧆";
  var egg = "🥚";
  var fried_egg = "🍳";
  var shallow_pan_of_food = "🥘";
  var stew = "🍲";
  var fondue = "🫕";
  var bowl_with_spoon = "🥣";
  var green_salad = "🥗";
  var popcorn = "🍿";
  var butter = "🧈";
  var salt = "🧂";
  var canned_food = "🥫";
  var bento = "🍱";
  var rice_cracker = "🍘";
  var rice_ball = "🍙";
  var rice = "🍚";
  var curry = "🍛";
  var ramen = "🍜";
  var spaghetti = "🍝";
  var sweet_potato = "🍠";
  var oden = "🍢";
  var sushi = "🍣";
  var fried_shrimp = "🍤";
  var fish_cake = "🍥";
  var moon_cake = "🥮";
  var dango = "🍡";
  var dumpling = "🥟";
  var fortune_cookie = "🥠";
  var takeout_box = "🥡";
  var crab = "🦀";
  var lobster = "🦞";
  var shrimp = "🦐";
  var squid = "🦑";
  var oyster = "🦪";
  var icecream = "🍦";
  var shaved_ice = "🍧";
  var ice_cream = "🍨";
  var doughnut = "🍩";
  var cookie = "🍪";
  var birthday = "🎂";
  var cake = "🍰";
  var cupcake = "🧁";
  var pie = "🥧";
  var chocolate_bar = "🍫";
  var candy = "🍬";
  var lollipop = "🍭";
  var custard = "🍮";
  var honey_pot = "🍯";
  var baby_bottle = "🍼";
  var milk_glass = "🥛";
  var coffee = "☕";
  var teapot = "🫖";
  var tea = "🍵";
  var sake = "🍶";
  var champagne = "🍾";
  var wine_glass = "🍷";
  var cocktail = "🍸";
  var tropical_drink = "🍹";
  var beer = "🍺";
  var beers = "🍻";
  var clinking_glasses = "🥂";
  var tumbler_glass = "🥃";
  var cup_with_straw = "🥤";
  var bubble_tea = "🧋";
  var beverage_box = "🧃";
  var mate = "🧉";
  var ice_cube = "🧊";
  var chopsticks = "🥢";
  var plate_with_cutlery = "🍽️";
  var fork_and_knife = "🍴";
  var spoon = "🥄";
  var hocho = "🔪";
  var knife = "🔪";
  var amphora = "🏺";
  var earth_africa = "🌍";
  var earth_americas = "🌎";
  var earth_asia = "🌏";
  var globe_with_meridians = "🌐";
  var world_map = "🗺️";
  var japan = "🗾";
  var compass = "🧭";
  var mountain_snow = "🏔️";
  var mountain = "⛰️";
  var volcano = "🌋";
  var mount_fuji = "🗻";
  var camping = "🏕️";
  var beach_umbrella = "🏖️";
  var desert = "🏜️";
  var desert_island = "🏝️";
  var national_park = "🏞️";
  var stadium = "🏟️";
  var classical_building = "🏛️";
  var building_construction = "🏗️";
  var bricks = "🧱";
  var rock = "🪨";
  var wood = "🪵";
  var hut = "🛖";
  var houses = "🏘️";
  var derelict_house = "🏚️";
  var house = "🏠";
  var house_with_garden = "🏡";
  var office = "🏢";
  var post_office = "🏣";
  var european_post_office = "🏤";
  var hospital = "🏥";
  var bank = "🏦";
  var hotel = "🏨";
  var love_hotel = "🏩";
  var convenience_store = "🏪";
  var school = "🏫";
  var department_store = "🏬";
  var factory = "🏭";
  var japanese_castle = "🏯";
  var european_castle = "🏰";
  var wedding = "💒";
  var tokyo_tower = "🗼";
  var statue_of_liberty = "🗽";
  var church = "⛪";
  var mosque = "🕌";
  var hindu_temple = "🛕";
  var synagogue = "🕍";
  var shinto_shrine = "⛩️";
  var kaaba = "🕋";
  var fountain = "⛲";
  var tent = "⛺";
  var foggy = "🌁";
  var night_with_stars = "🌃";
  var cityscape = "🏙️";
  var sunrise_over_mountains = "🌄";
  var sunrise = "🌅";
  var city_sunset = "🌆";
  var city_sunrise = "🌇";
  var bridge_at_night = "🌉";
  var hotsprings = "♨️";
  var carousel_horse = "🎠";
  var ferris_wheel = "🎡";
  var roller_coaster = "🎢";
  var barber = "💈";
  var circus_tent = "🎪";
  var steam_locomotive = "🚂";
  var railway_car = "🚃";
  var bullettrain_side = "🚄";
  var bullettrain_front = "🚅";
  var train2 = "🚆";
  var metro = "🚇";
  var light_rail = "🚈";
  var station = "🚉";
  var tram = "🚊";
  var monorail = "🚝";
  var mountain_railway = "🚞";
  var train = "🚋";
  var bus = "🚌";
  var oncoming_bus = "🚍";
  var trolleybus = "🚎";
  var minibus = "🚐";
  var ambulance = "🚑";
  var fire_engine = "🚒";
  var police_car = "🚓";
  var oncoming_police_car = "🚔";
  var taxi = "🚕";
  var oncoming_taxi = "🚖";
  var car = "🚗";
  var red_car = "🚗";
  var oncoming_automobile = "🚘";
  var blue_car = "🚙";
  var pickup_truck = "🛻";
  var truck = "🚚";
  var articulated_lorry = "🚛";
  var tractor = "🚜";
  var racing_car = "🏎️";
  var motorcycle = "🏍️";
  var motor_scooter = "🛵";
  var manual_wheelchair = "🦽";
  var motorized_wheelchair = "🦼";
  var auto_rickshaw = "🛺";
  var bike = "🚲";
  var kick_scooter = "🛴";
  var skateboard = "🛹";
  var roller_skate = "🛼";
  var busstop = "🚏";
  var motorway = "🛣️";
  var railway_track = "🛤️";
  var oil_drum = "🛢️";
  var fuelpump = "⛽";
  var rotating_light = "🚨";
  var traffic_light = "🚥";
  var vertical_traffic_light = "🚦";
  var stop_sign = "🛑";
  var construction = "🚧";
  var anchor = "⚓";
  var boat = "⛵";
  var sailboat = "⛵";
  var canoe = "🛶";
  var speedboat = "🚤";
  var passenger_ship = "🛳️";
  var ferry = "⛴️";
  var motor_boat = "🛥️";
  var ship = "🚢";
  var airplane = "✈️";
  var small_airplane = "🛩️";
  var flight_departure = "🛫";
  var flight_arrival = "🛬";
  var parachute = "🪂";
  var seat = "💺";
  var helicopter = "🚁";
  var suspension_railway = "🚟";
  var mountain_cableway = "🚠";
  var aerial_tramway = "🚡";
  var artificial_satellite = "🛰️";
  var rocket = "🚀";
  var flying_saucer = "🛸";
  var bellhop_bell = "🛎️";
  var luggage = "🧳";
  var hourglass = "⌛";
  var hourglass_flowing_sand = "⏳";
  var watch = "⌚";
  var alarm_clock = "⏰";
  var stopwatch = "⏱️";
  var timer_clock = "⏲️";
  var mantelpiece_clock = "🕰️";
  var clock12 = "🕛";
  var clock1230 = "🕧";
  var clock1 = "🕐";
  var clock130 = "🕜";
  var clock2 = "🕑";
  var clock230 = "🕝";
  var clock3 = "🕒";
  var clock330 = "🕞";
  var clock4 = "🕓";
  var clock430 = "🕟";
  var clock5 = "🕔";
  var clock530 = "🕠";
  var clock6 = "🕕";
  var clock630 = "🕡";
  var clock7 = "🕖";
  var clock730 = "🕢";
  var clock8 = "🕗";
  var clock830 = "🕣";
  var clock9 = "🕘";
  var clock930 = "🕤";
  var clock10 = "🕙";
  var clock1030 = "🕥";
  var clock11 = "🕚";
  var clock1130 = "🕦";
  var new_moon = "🌑";
  var waxing_crescent_moon = "🌒";
  var first_quarter_moon = "🌓";
  var moon = "🌔";
  var waxing_gibbous_moon = "🌔";
  var full_moon = "🌕";
  var waning_gibbous_moon = "🌖";
  var last_quarter_moon = "🌗";
  var waning_crescent_moon = "🌘";
  var crescent_moon = "🌙";
  var new_moon_with_face = "🌚";
  var first_quarter_moon_with_face = "🌛";
  var last_quarter_moon_with_face = "🌜";
  var thermometer = "🌡️";
  var sunny = "☀️";
  var full_moon_with_face = "🌝";
  var sun_with_face = "🌞";
  var ringed_planet = "🪐";
  var star = "⭐";
  var star2 = "🌟";
  var stars = "🌠";
  var milky_way = "🌌";
  var cloud = "☁️";
  var partly_sunny = "⛅";
  var cloud_with_lightning_and_rain = "⛈️";
  var sun_behind_small_cloud = "🌤️";
  var sun_behind_large_cloud = "🌥️";
  var sun_behind_rain_cloud = "🌦️";
  var cloud_with_rain = "🌧️";
  var cloud_with_snow = "🌨️";
  var cloud_with_lightning = "🌩️";
  var tornado = "🌪️";
  var fog = "🌫️";
  var wind_face = "🌬️";
  var cyclone = "🌀";
  var rainbow = "🌈";
  var closed_umbrella = "🌂";
  var open_umbrella = "☂️";
  var umbrella = "☔";
  var parasol_on_ground = "⛱️";
  var zap = "⚡";
  var snowflake = "❄️";
  var snowman_with_snow = "☃️";
  var snowman = "⛄";
  var comet = "☄️";
  var fire = "🔥";
  var droplet = "💧";
  var ocean = "🌊";
  var jack_o_lantern = "🎃";
  var christmas_tree = "🎄";
  var fireworks = "🎆";
  var sparkler = "🎇";
  var firecracker = "🧨";
  var sparkles = "✨";
  var balloon = "🎈";
  var tada = "🎉";
  var confetti_ball = "🎊";
  var tanabata_tree = "🎋";
  var bamboo = "🎍";
  var dolls = "🎎";
  var flags = "🎏";
  var wind_chime = "🎐";
  var rice_scene = "🎑";
  var red_envelope = "🧧";
  var ribbon = "🎀";
  var gift = "🎁";
  var reminder_ribbon = "🎗️";
  var tickets = "🎟️";
  var ticket = "🎫";
  var medal_military = "🎖️";
  var trophy = "🏆";
  var medal_sports = "🏅";
  var soccer = "⚽";
  var baseball = "⚾";
  var softball = "🥎";
  var basketball = "🏀";
  var volleyball = "🏐";
  var football = "🏈";
  var rugby_football = "🏉";
  var tennis = "🎾";
  var flying_disc = "🥏";
  var bowling = "🎳";
  var cricket_game = "🏏";
  var field_hockey = "🏑";
  var ice_hockey = "🏒";
  var lacrosse = "🥍";
  var ping_pong = "🏓";
  var badminton = "🏸";
  var boxing_glove = "🥊";
  var martial_arts_uniform = "🥋";
  var goal_net = "🥅";
  var golf = "⛳";
  var ice_skate = "⛸️";
  var fishing_pole_and_fish = "🎣";
  var diving_mask = "🤿";
  var running_shirt_with_sash = "🎽";
  var ski = "🎿";
  var sled = "🛷";
  var curling_stone = "🥌";
  var dart = "🎯";
  var yo_yo = "🪀";
  var kite = "🪁";
  var crystal_ball = "🔮";
  var magic_wand = "🪄";
  var nazar_amulet = "🧿";
  var video_game = "🎮";
  var joystick = "🕹️";
  var slot_machine = "🎰";
  var game_die = "🎲";
  var jigsaw = "🧩";
  var teddy_bear = "🧸";
  var pi_ata = "🪅";
  var nesting_dolls = "🪆";
  var spades = "♠️";
  var hearts = "♥️";
  var diamonds = "♦️";
  var clubs = "♣️";
  var chess_pawn = "♟️";
  var black_joker = "🃏";
  var mahjong = "🀄";
  var flower_playing_cards = "🎴";
  var performing_arts = "🎭";
  var framed_picture = "🖼️";
  var art = "🎨";
  var thread = "🧵";
  var sewing_needle = "🪡";
  var yarn = "🧶";
  var knot = "🪢";
  var eyeglasses = "👓";
  var dark_sunglasses = "🕶️";
  var goggles = "🥽";
  var lab_coat = "🥼";
  var safety_vest = "🦺";
  var necktie = "👔";
  var shirt = "👕";
  var tshirt = "👕";
  var jeans = "👖";
  var scarf = "🧣";
  var gloves = "🧤";
  var coat = "🧥";
  var socks = "🧦";
  var dress = "👗";
  var kimono = "👘";
  var sari = "🥻";
  var one_piece_swimsuit = "🩱";
  var swim_brief = "🩲";
  var shorts = "🩳";
  var bikini = "👙";
  var womans_clothes = "👚";
  var purse = "👛";
  var handbag = "👜";
  var pouch = "👝";
  var shopping = "🛍️";
  var school_satchel = "🎒";
  var thong_sandal = "🩴";
  var mans_shoe = "👞";
  var shoe = "👞";
  var athletic_shoe = "👟";
  var hiking_boot = "🥾";
  var flat_shoe = "🥿";
  var high_heel = "👠";
  var sandal = "👡";
  var ballet_shoes = "🩰";
  var boot = "👢";
  var crown = "👑";
  var womans_hat = "👒";
  var tophat = "🎩";
  var mortar_board = "🎓";
  var billed_cap = "🧢";
  var military_helmet = "🪖";
  var rescue_worker_helmet = "⛑️";
  var prayer_beads = "📿";
  var lipstick = "💄";
  var ring = "💍";
  var gem = "💎";
  var mute = "🔇";
  var speaker = "🔈";
  var sound = "🔉";
  var loud_sound = "🔊";
  var loudspeaker = "📢";
  var mega = "📣";
  var postal_horn = "📯";
  var bell = "🔔";
  var no_bell = "🔕";
  var musical_score = "🎼";
  var musical_note = "🎵";
  var notes = "🎶";
  var studio_microphone = "🎙️";
  var level_slider = "🎚️";
  var control_knobs = "🎛️";
  var microphone = "🎤";
  var headphones = "🎧";
  var radio = "📻";
  var saxophone = "🎷";
  var accordion = "🪗";
  var guitar = "🎸";
  var musical_keyboard = "🎹";
  var trumpet = "🎺";
  var violin = "🎻";
  var banjo = "🪕";
  var drum = "🥁";
  var long_drum = "🪘";
  var iphone = "📱";
  var calling = "📲";
  var phone = "☎️";
  var telephone = "☎️";
  var telephone_receiver = "📞";
  var pager = "📟";
  var fax = "📠";
  var battery = "🔋";
  var electric_plug = "🔌";
  var computer = "💻";
  var desktop_computer = "🖥️";
  var printer = "🖨️";
  var keyboard = "⌨️";
  var computer_mouse = "🖱️";
  var trackball = "🖲️";
  var minidisc = "💽";
  var floppy_disk = "💾";
  var cd = "💿";
  var dvd = "📀";
  var abacus = "🧮";
  var movie_camera = "🎥";
  var film_strip = "🎞️";
  var film_projector = "📽️";
  var clapper = "🎬";
  var tv = "📺";
  var camera = "📷";
  var camera_flash = "📸";
  var video_camera = "📹";
  var vhs = "📼";
  var mag = "🔍";
  var mag_right = "🔎";
  var candle = "🕯️";
  var bulb = "💡";
  var flashlight = "🔦";
  var izakaya_lantern = "🏮";
  var lantern = "🏮";
  var diya_lamp = "🪔";
  var notebook_with_decorative_cover = "📔";
  var closed_book = "📕";
  var book = "📖";
  var open_book = "📖";
  var green_book = "📗";
  var blue_book = "📘";
  var orange_book = "📙";
  var books = "📚";
  var notebook = "📓";
  var ledger = "📒";
  var page_with_curl = "📃";
  var scroll = "📜";
  var page_facing_up = "📄";
  var newspaper = "📰";
  var newspaper_roll = "🗞️";
  var bookmark_tabs = "📑";
  var bookmark = "🔖";
  var label = "🏷️";
  var moneybag = "💰";
  var coin = "🪙";
  var yen = "💴";
  var dollar = "💵";
  var euro = "💶";
  var pound = "💷";
  var money_with_wings = "💸";
  var credit_card = "💳";
  var receipt = "🧾";
  var chart = "💹";
  var email = "✉️";
  var envelope = "✉️";
  var incoming_envelope = "📨";
  var envelope_with_arrow = "📩";
  var outbox_tray = "📤";
  var inbox_tray = "📥";
  var mailbox = "📫";
  var mailbox_closed = "📪";
  var mailbox_with_mail = "📬";
  var mailbox_with_no_mail = "📭";
  var postbox = "📮";
  var ballot_box = "🗳️";
  var pencil2 = "✏️";
  var black_nib = "✒️";
  var fountain_pen = "🖋️";
  var pen = "🖊️";
  var paintbrush = "🖌️";
  var crayon = "🖍️";
  var memo = "📝";
  var pencil = "📝";
  var briefcase = "💼";
  var file_folder = "📁";
  var open_file_folder = "📂";
  var card_index_dividers = "🗂️";
  var date = "📅";
  var calendar = "📆";
  var spiral_notepad = "🗒️";
  var spiral_calendar = "🗓️";
  var card_index = "📇";
  var chart_with_upwards_trend = "📈";
  var chart_with_downwards_trend = "📉";
  var bar_chart = "📊";
  var clipboard = "📋";
  var pushpin = "📌";
  var round_pushpin = "📍";
  var paperclip = "📎";
  var paperclips = "🖇️";
  var straight_ruler = "📏";
  var triangular_ruler = "📐";
  var scissors = "✂️";
  var card_file_box = "🗃️";
  var file_cabinet = "🗄️";
  var wastebasket = "🗑️";
  var lock = "🔒";
  var unlock = "🔓";
  var lock_with_ink_pen = "🔏";
  var closed_lock_with_key = "🔐";
  var key = "🔑";
  var old_key = "🗝️";
  var hammer = "🔨";
  var axe = "🪓";
  var pick = "⛏️";
  var hammer_and_pick = "⚒️";
  var hammer_and_wrench = "🛠️";
  var dagger = "🗡️";
  var crossed_swords = "⚔️";
  var gun = "🔫";
  var boomerang = "🪃";
  var bow_and_arrow = "🏹";
  var shield = "🛡️";
  var carpentry_saw = "🪚";
  var wrench = "🔧";
  var screwdriver = "🪛";
  var nut_and_bolt = "🔩";
  var gear = "⚙️";
  var clamp = "🗜️";
  var balance_scale = "⚖️";
  var probing_cane = "🦯";
  var link = "🔗";
  var chains = "⛓️";
  var hook = "🪝";
  var toolbox = "🧰";
  var magnet = "🧲";
  var ladder = "🪜";
  var alembic = "⚗️";
  var test_tube = "🧪";
  var petri_dish = "🧫";
  var dna = "🧬";
  var microscope = "🔬";
  var telescope = "🔭";
  var satellite = "📡";
  var syringe = "💉";
  var drop_of_blood = "🩸";
  var pill = "💊";
  var adhesive_bandage = "🩹";
  var stethoscope = "🩺";
  var door = "🚪";
  var elevator = "🛗";
  var mirror = "🪞";
  var window = "🪟";
  var bed = "🛏️";
  var couch_and_lamp = "🛋️";
  var chair = "🪑";
  var toilet = "🚽";
  var plunger = "🪠";
  var shower = "🚿";
  var bathtub = "🛁";
  var mouse_trap = "🪤";
  var razor = "🪒";
  var lotion_bottle = "🧴";
  var safety_pin = "🧷";
  var broom = "🧹";
  var basket = "🧺";
  var roll_of_paper = "🧻";
  var bucket = "🪣";
  var soap = "🧼";
  var toothbrush = "🪥";
  var sponge = "🧽";
  var fire_extinguisher = "🧯";
  var shopping_cart = "🛒";
  var smoking = "🚬";
  var coffin = "⚰️";
  var headstone = "🪦";
  var funeral_urn = "⚱️";
  var moyai = "🗿";
  var placard = "🪧";
  var atm = "🏧";
  var put_litter_in_its_place = "🚮";
  var potable_water = "🚰";
  var wheelchair = "♿";
  var mens = "🚹";
  var womens = "🚺";
  var restroom = "🚻";
  var baby_symbol = "🚼";
  var wc = "🚾";
  var passport_control = "🛂";
  var customs = "🛃";
  var baggage_claim = "🛄";
  var left_luggage = "🛅";
  var warning = "⚠️";
  var children_crossing = "🚸";
  var no_entry = "⛔";
  var no_entry_sign = "🚫";
  var no_bicycles = "🚳";
  var no_smoking = "🚭";
  var do_not_litter = "🚯";
  var no_pedestrians = "🚷";
  var no_mobile_phones = "📵";
  var underage = "🔞";
  var radioactive = "☢️";
  var biohazard = "☣️";
  var arrow_up = "⬆️";
  var arrow_upper_right = "↗️";
  var arrow_right = "➡️";
  var arrow_lower_right = "↘️";
  var arrow_down = "⬇️";
  var arrow_lower_left = "↙️";
  var arrow_left = "⬅️";
  var arrow_upper_left = "↖️";
  var arrow_up_down = "↕️";
  var left_right_arrow = "↔️";
  var leftwards_arrow_with_hook = "↩️";
  var arrow_right_hook = "↪️";
  var arrow_heading_up = "⤴️";
  var arrow_heading_down = "⤵️";
  var arrows_clockwise = "🔃";
  var arrows_counterclockwise = "🔄";
  var back = "🔙";
  var end = "🔚";
  var on = "🔛";
  var soon = "🔜";
  var top = "🔝";
  var place_of_worship = "🛐";
  var atom_symbol = "⚛️";
  var om = "🕉️";
  var star_of_david = "✡️";
  var wheel_of_dharma = "☸️";
  var yin_yang = "☯️";
  var latin_cross = "✝️";
  var orthodox_cross = "☦️";
  var star_and_crescent = "☪️";
  var peace_symbol = "☮️";
  var menorah = "🕎";
  var six_pointed_star = "🔯";
  var aries = "♈";
  var taurus = "♉";
  var gemini = "♊";
  var cancer = "♋";
  var leo = "♌";
  var virgo = "♍";
  var libra = "♎";
  var scorpius = "♏";
  var sagittarius = "♐";
  var capricorn = "♑";
  var aquarius = "♒";
  var pisces = "♓";
  var ophiuchus = "⛎";
  var twisted_rightwards_arrows = "🔀";
  var repeat = "🔁";
  var repeat_one = "🔂";
  var arrow_forward = "▶️";
  var fast_forward = "⏩";
  var next_track_button = "⏭️";
  var play_or_pause_button = "⏯️";
  var arrow_backward = "◀️";
  var rewind = "⏪";
  var previous_track_button = "⏮️";
  var arrow_up_small = "🔼";
  var arrow_double_up = "⏫";
  var arrow_down_small = "🔽";
  var arrow_double_down = "⏬";
  var pause_button = "⏸️";
  var stop_button = "⏹️";
  var record_button = "⏺️";
  var eject_button = "⏏️";
  var cinema = "🎦";
  var low_brightness = "🔅";
  var high_brightness = "🔆";
  var signal_strength = "📶";
  var vibration_mode = "📳";
  var mobile_phone_off = "📴";
  var female_sign = "♀️";
  var male_sign = "♂️";
  var transgender_symbol = "⚧️";
  var heavy_multiplication_x = "✖️";
  var heavy_plus_sign = "➕";
  var heavy_minus_sign = "➖";
  var heavy_division_sign = "➗";
  var infinity = "♾️";
  var bangbang = "‼️";
  var interrobang = "⁉️";
  var question = "❓";
  var grey_question = "❔";
  var grey_exclamation = "❕";
  var exclamation = "❗";
  var heavy_exclamation_mark = "❗";
  var wavy_dash = "〰️";
  var currency_exchange = "💱";
  var heavy_dollar_sign = "💲";
  var medical_symbol = "⚕️";
  var recycle = "♻️";
  var fleur_de_lis = "⚜️";
  var trident = "🔱";
  var name_badge = "📛";
  var beginner = "🔰";
  var o = "⭕";
  var white_check_mark = "✅";
  var ballot_box_with_check = "☑️";
  var heavy_check_mark = "✔️";
  var x = "❌";
  var negative_squared_cross_mark = "❎";
  var curly_loop = "➰";
  var loop = "➿";
  var part_alternation_mark = "〽️";
  var eight_spoked_asterisk = "✳️";
  var eight_pointed_black_star = "✴️";
  var sparkle = "❇️";
  var copyright = "©️";
  var registered = "®️";
  var tm = "™️";
  var hash = "#️⃣";
  var asterisk = "*️⃣";
  var zero = "0️⃣";
  var one = "1️⃣";
  var two = "2️⃣";
  var three = "3️⃣";
  var four = "4️⃣";
  var five = "5️⃣";
  var six = "6️⃣";
  var seven = "7️⃣";
  var eight = "8️⃣";
  var nine = "9️⃣";
  var keycap_ten = "🔟";
  var capital_abcd = "🔠";
  var abcd = "🔡";
  var symbols = "🔣";
  var abc = "🔤";
  var a = "🅰️";
  var ab = "🆎";
  var b = "🅱️";
  var cl = "🆑";
  var cool = "🆒";
  var free = "🆓";
  var information_source = "ℹ️";
  var id = "🆔";
  var m = "Ⓜ️";
  var ng = "🆖";
  var o2 = "🅾️";
  var ok = "🆗";
  var parking = "🅿️";
  var sos = "🆘";
  var up = "🆙";
  var vs = "🆚";
  var koko = "🈁";
  var sa = "🈂️";
  var ideograph_advantage = "🉐";
  var accept = "🉑";
  var congratulations = "㊗️";
  var secret = "㊙️";
  var u6e80 = "🈵";
  var red_circle = "🔴";
  var orange_circle = "🟠";
  var yellow_circle = "🟡";
  var green_circle = "🟢";
  var large_blue_circle = "🔵";
  var purple_circle = "🟣";
  var brown_circle = "🟤";
  var black_circle = "⚫";
  var white_circle = "⚪";
  var red_square = "🟥";
  var orange_square = "🟧";
  var yellow_square = "🟨";
  var green_square = "🟩";
  var blue_square = "🟦";
  var purple_square = "🟪";
  var brown_square = "🟫";
  var black_large_square = "⬛";
  var white_large_square = "⬜";
  var black_medium_square = "◼️";
  var white_medium_square = "◻️";
  var black_medium_small_square = "◾";
  var white_medium_small_square = "◽";
  var black_small_square = "▪️";
  var white_small_square = "▫️";
  var large_orange_diamond = "🔶";
  var large_blue_diamond = "🔷";
  var small_orange_diamond = "🔸";
  var small_blue_diamond = "🔹";
  var small_red_triangle = "🔺";
  var small_red_triangle_down = "🔻";
  var diamond_shape_with_a_dot_inside = "💠";
  var radio_button = "🔘";
  var white_square_button = "🔳";
  var black_square_button = "🔲";
  var checkered_flag = "🏁";
  var triangular_flag_on_post = "🚩";
  var crossed_flags = "🎌";
  var black_flag = "🏴";
  var white_flag = "🏳️";
  var rainbow_flag = "🏳️‍🌈";
  var transgender_flag = "🏳️‍⚧️";
  var pirate_flag = "🏴‍☠️";
  var ascension_island = "🇦🇨";
  var andorra = "🇦🇩";
  var united_arab_emirates = "🇦🇪";
  var afghanistan = "🇦🇫";
  var antigua_barbuda = "🇦🇬";
  var anguilla = "🇦🇮";
  var albania = "🇦🇱";
  var armenia = "🇦🇲";
  var angola = "🇦🇴";
  var antarctica = "🇦🇶";
  var argentina = "🇦🇷";
  var american_samoa = "🇦🇸";
  var austria = "🇦🇹";
  var australia = "🇦🇺";
  var aruba = "🇦🇼";
  var aland_islands = "🇦🇽";
  var azerbaijan = "🇦🇿";
  var bosnia_herzegovina = "🇧🇦";
  var barbados = "🇧🇧";
  var bangladesh = "🇧🇩";
  var belgium = "🇧🇪";
  var burkina_faso = "🇧🇫";
  var bulgaria = "🇧🇬";
  var bahrain = "🇧🇭";
  var burundi = "🇧🇮";
  var benin = "🇧🇯";
  var st_barthelemy = "🇧🇱";
  var bermuda = "🇧🇲";
  var brunei = "🇧🇳";
  var bolivia = "🇧🇴";
  var caribbean_netherlands = "🇧🇶";
  var brazil = "🇧🇷";
  var bahamas = "🇧🇸";
  var bhutan = "🇧🇹";
  var bouvet_island = "🇧🇻";
  var botswana = "🇧🇼";
  var belarus = "🇧🇾";
  var belize = "🇧🇿";
  var canada = "🇨🇦";
  var cocos_islands = "🇨🇨";
  var congo_kinshasa = "🇨🇩";
  var central_african_republic = "🇨🇫";
  var congo_brazzaville = "🇨🇬";
  var switzerland = "🇨🇭";
  var cote_divoire = "🇨🇮";
  var cook_islands = "🇨🇰";
  var chile = "🇨🇱";
  var cameroon = "🇨🇲";
  var cn = "🇨🇳";
  var colombia = "🇨🇴";
  var clipperton_island = "🇨🇵";
  var costa_rica = "🇨🇷";
  var cuba = "🇨🇺";
  var cape_verde = "🇨🇻";
  var curacao = "🇨🇼";
  var christmas_island = "🇨🇽";
  var cyprus = "🇨🇾";
  var czech_republic = "🇨🇿";
  var de = "🇩🇪";
  var diego_garcia = "🇩🇬";
  var djibouti = "🇩🇯";
  var denmark = "🇩🇰";
  var dominica = "🇩🇲";
  var dominican_republic = "🇩🇴";
  var algeria = "🇩🇿";
  var ceuta_melilla = "🇪🇦";
  var ecuador = "🇪🇨";
  var estonia = "🇪🇪";
  var egypt = "🇪🇬";
  var western_sahara = "🇪🇭";
  var eritrea = "🇪🇷";
  var es = "🇪🇸";
  var ethiopia = "🇪🇹";
  var eu = "🇪🇺";
  var european_union = "🇪🇺";
  var finland = "🇫🇮";
  var fiji = "🇫🇯";
  var falkland_islands = "🇫🇰";
  var micronesia = "🇫🇲";
  var faroe_islands = "🇫🇴";
  var fr = "🇫🇷";
  var gabon = "🇬🇦";
  var gb = "🇬🇧";
  var uk = "🇬🇧";
  var grenada = "🇬🇩";
  var georgia = "🇬🇪";
  var french_guiana = "🇬🇫";
  var guernsey = "🇬🇬";
  var ghana = "🇬🇭";
  var gibraltar = "🇬🇮";
  var greenland = "🇬🇱";
  var gambia = "🇬🇲";
  var guinea = "🇬🇳";
  var guadeloupe = "🇬🇵";
  var equatorial_guinea = "🇬🇶";
  var greece = "🇬🇷";
  var south_georgia_south_sandwich_islands = "🇬🇸";
  var guatemala = "🇬🇹";
  var guam = "🇬🇺";
  var guinea_bissau = "🇬🇼";
  var guyana = "🇬🇾";
  var hong_kong = "🇭🇰";
  var heard_mcdonald_islands = "🇭🇲";
  var honduras = "🇭🇳";
  var croatia = "🇭🇷";
  var haiti = "🇭🇹";
  var hungary = "🇭🇺";
  var canary_islands = "🇮🇨";
  var indonesia = "🇮🇩";
  var ireland = "🇮🇪";
  var israel = "🇮🇱";
  var isle_of_man = "🇮🇲";
  var india = "🇮🇳";
  var british_indian_ocean_territory = "🇮🇴";
  var iraq = "🇮🇶";
  var iran = "🇮🇷";
  var iceland = "🇮🇸";
  var it = "🇮🇹";
  var jersey = "🇯🇪";
  var jamaica = "🇯🇲";
  var jordan = "🇯🇴";
  var jp = "🇯🇵";
  var kenya = "🇰🇪";
  var kyrgyzstan = "🇰🇬";
  var cambodia = "🇰🇭";
  var kiribati = "🇰🇮";
  var comoros = "🇰🇲";
  var st_kitts_nevis = "🇰🇳";
  var north_korea = "🇰🇵";
  var kr = "🇰🇷";
  var kuwait = "🇰🇼";
  var cayman_islands = "🇰🇾";
  var kazakhstan = "🇰🇿";
  var laos = "🇱🇦";
  var lebanon = "🇱🇧";
  var st_lucia = "🇱🇨";
  var liechtenstein = "🇱🇮";
  var sri_lanka = "🇱🇰";
  var liberia = "🇱🇷";
  var lesotho = "🇱🇸";
  var lithuania = "🇱🇹";
  var luxembourg = "🇱🇺";
  var latvia = "🇱🇻";
  var libya = "🇱🇾";
  var morocco = "🇲🇦";
  var monaco = "🇲🇨";
  var moldova = "🇲🇩";
  var montenegro = "🇲🇪";
  var st_martin = "🇲🇫";
  var madagascar = "🇲🇬";
  var marshall_islands = "🇲🇭";
  var macedonia = "🇲🇰";
  var mali = "🇲🇱";
  var myanmar = "🇲🇲";
  var mongolia = "🇲🇳";
  var macau = "🇲🇴";
  var northern_mariana_islands = "🇲🇵";
  var martinique = "🇲🇶";
  var mauritania = "🇲🇷";
  var montserrat = "🇲🇸";
  var malta = "🇲🇹";
  var mauritius = "🇲🇺";
  var maldives = "🇲🇻";
  var malawi = "🇲🇼";
  var mexico = "🇲🇽";
  var malaysia = "🇲🇾";
  var mozambique = "🇲🇿";
  var namibia = "🇳🇦";
  var new_caledonia = "🇳🇨";
  var niger = "🇳🇪";
  var norfolk_island = "🇳🇫";
  var nigeria = "🇳🇬";
  var nicaragua = "🇳🇮";
  var netherlands = "🇳🇱";
  var norway = "🇳🇴";
  var nepal = "🇳🇵";
  var nauru = "🇳🇷";
  var niue = "🇳🇺";
  var new_zealand = "🇳🇿";
  var oman = "🇴🇲";
  var panama = "🇵🇦";
  var peru = "🇵🇪";
  var french_polynesia = "🇵🇫";
  var papua_new_guinea = "🇵🇬";
  var philippines = "🇵🇭";
  var pakistan = "🇵🇰";
  var poland = "🇵🇱";
  var st_pierre_miquelon = "🇵🇲";
  var pitcairn_islands = "🇵🇳";
  var puerto_rico = "🇵🇷";
  var palestinian_territories = "🇵🇸";
  var portugal = "🇵🇹";
  var palau = "🇵🇼";
  var paraguay = "🇵🇾";
  var qatar = "🇶🇦";
  var reunion = "🇷🇪";
  var romania = "🇷🇴";
  var serbia = "🇷🇸";
  var ru = "🇷🇺";
  var rwanda = "🇷🇼";
  var saudi_arabia = "🇸🇦";
  var solomon_islands = "🇸🇧";
  var seychelles = "🇸🇨";
  var sudan = "🇸🇩";
  var sweden = "🇸🇪";
  var singapore = "🇸🇬";
  var st_helena = "🇸🇭";
  var slovenia = "🇸🇮";
  var svalbard_jan_mayen = "🇸🇯";
  var slovakia = "🇸🇰";
  var sierra_leone = "🇸🇱";
  var san_marino = "🇸🇲";
  var senegal = "🇸🇳";
  var somalia = "🇸🇴";
  var suriname = "🇸🇷";
  var south_sudan = "🇸🇸";
  var sao_tome_principe = "🇸🇹";
  var el_salvador = "🇸🇻";
  var sint_maarten = "🇸🇽";
  var syria = "🇸🇾";
  var swaziland = "🇸🇿";
  var tristan_da_cunha = "🇹🇦";
  var turks_caicos_islands = "🇹🇨";
  var chad = "🇹🇩";
  var french_southern_territories = "🇹🇫";
  var togo = "🇹🇬";
  var thailand = "🇹🇭";
  var tajikistan = "🇹🇯";
  var tokelau = "🇹🇰";
  var timor_leste = "🇹🇱";
  var turkmenistan = "🇹🇲";
  var tunisia = "🇹🇳";
  var tonga = "🇹🇴";
  var tr = "🇹🇷";
  var trinidad_tobago = "🇹🇹";
  var tuvalu = "🇹🇻";
  var taiwan = "🇹🇼";
  var tanzania = "🇹🇿";
  var ukraine = "🇺🇦";
  var uganda = "🇺🇬";
  var us_outlying_islands = "🇺🇲";
  var united_nations = "🇺🇳";
  var us = "🇺🇸";
  var uruguay = "🇺🇾";
  var uzbekistan = "🇺🇿";
  var vatican_city = "🇻🇦";
  var st_vincent_grenadines = "🇻🇨";
  var venezuela = "🇻🇪";
  var british_virgin_islands = "🇻🇬";
  var us_virgin_islands = "🇻🇮";
  var vietnam = "🇻🇳";
  var vanuatu = "🇻🇺";
  var wallis_futuna = "🇼🇫";
  var samoa = "🇼🇸";
  var kosovo = "🇽🇰";
  var yemen = "🇾🇪";
  var mayotte = "🇾🇹";
  var south_africa = "🇿🇦";
  var zambia = "🇿🇲";
  var zimbabwe = "🇿🇼";
  var england = "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
  var scotland = "🏴󠁧󠁢󠁳󠁣󠁴󠁿";
  var wales = "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
  var emojies_defs = {
  	"100": "💯",
  	"1234": "🔢",
  	grinning: grinning,
  	smiley: smiley,
  	smile: smile,
  	grin: grin,
  	laughing: laughing,
  	satisfied: satisfied,
  	sweat_smile: sweat_smile,
  	rofl: rofl,
  	joy: joy,
  	slightly_smiling_face: slightly_smiling_face,
  	upside_down_face: upside_down_face,
  	wink: wink,
  	blush: blush,
  	innocent: innocent,
  	smiling_face_with_three_hearts: smiling_face_with_three_hearts,
  	heart_eyes: heart_eyes,
  	star_struck: star_struck,
  	kissing_heart: kissing_heart,
  	kissing: kissing,
  	relaxed: relaxed,
  	kissing_closed_eyes: kissing_closed_eyes,
  	kissing_smiling_eyes: kissing_smiling_eyes,
  	smiling_face_with_tear: smiling_face_with_tear,
  	yum: yum,
  	stuck_out_tongue: stuck_out_tongue,
  	stuck_out_tongue_winking_eye: stuck_out_tongue_winking_eye,
  	zany_face: zany_face,
  	stuck_out_tongue_closed_eyes: stuck_out_tongue_closed_eyes,
  	money_mouth_face: money_mouth_face,
  	hugs: hugs,
  	hand_over_mouth: hand_over_mouth,
  	shushing_face: shushing_face,
  	thinking: thinking,
  	zipper_mouth_face: zipper_mouth_face,
  	raised_eyebrow: raised_eyebrow,
  	neutral_face: neutral_face,
  	expressionless: expressionless,
  	no_mouth: no_mouth,
  	smirk: smirk,
  	unamused: unamused,
  	roll_eyes: roll_eyes,
  	grimacing: grimacing,
  	lying_face: lying_face,
  	relieved: relieved,
  	pensive: pensive,
  	sleepy: sleepy,
  	drooling_face: drooling_face,
  	sleeping: sleeping,
  	mask: mask,
  	face_with_thermometer: face_with_thermometer,
  	face_with_head_bandage: face_with_head_bandage,
  	nauseated_face: nauseated_face,
  	vomiting_face: vomiting_face,
  	sneezing_face: sneezing_face,
  	hot_face: hot_face,
  	cold_face: cold_face,
  	woozy_face: woozy_face,
  	dizzy_face: dizzy_face,
  	exploding_head: exploding_head,
  	cowboy_hat_face: cowboy_hat_face,
  	partying_face: partying_face,
  	disguised_face: disguised_face,
  	sunglasses: sunglasses,
  	nerd_face: nerd_face,
  	monocle_face: monocle_face,
  	confused: confused,
  	worried: worried,
  	slightly_frowning_face: slightly_frowning_face,
  	frowning_face: frowning_face,
  	open_mouth: open_mouth,
  	hushed: hushed,
  	astonished: astonished,
  	flushed: flushed,
  	pleading_face: pleading_face,
  	frowning: frowning,
  	anguished: anguished,
  	fearful: fearful,
  	cold_sweat: cold_sweat,
  	disappointed_relieved: disappointed_relieved,
  	cry: cry,
  	sob: sob,
  	scream: scream,
  	confounded: confounded,
  	persevere: persevere,
  	disappointed: disappointed,
  	sweat: sweat,
  	weary: weary,
  	tired_face: tired_face,
  	yawning_face: yawning_face,
  	triumph: triumph,
  	rage: rage,
  	pout: pout,
  	angry: angry,
  	cursing_face: cursing_face,
  	smiling_imp: smiling_imp,
  	imp: imp,
  	skull: skull,
  	skull_and_crossbones: skull_and_crossbones,
  	hankey: hankey,
  	poop: poop,
  	shit: shit,
  	clown_face: clown_face,
  	japanese_ogre: japanese_ogre,
  	japanese_goblin: japanese_goblin,
  	ghost: ghost,
  	alien: alien,
  	space_invader: space_invader,
  	robot: robot,
  	smiley_cat: smiley_cat,
  	smile_cat: smile_cat,
  	joy_cat: joy_cat,
  	heart_eyes_cat: heart_eyes_cat,
  	smirk_cat: smirk_cat,
  	kissing_cat: kissing_cat,
  	scream_cat: scream_cat,
  	crying_cat_face: crying_cat_face,
  	pouting_cat: pouting_cat,
  	see_no_evil: see_no_evil,
  	hear_no_evil: hear_no_evil,
  	speak_no_evil: speak_no_evil,
  	kiss: kiss,
  	love_letter: love_letter,
  	cupid: cupid,
  	gift_heart: gift_heart,
  	sparkling_heart: sparkling_heart,
  	heartpulse: heartpulse,
  	heartbeat: heartbeat,
  	revolving_hearts: revolving_hearts,
  	two_hearts: two_hearts,
  	heart_decoration: heart_decoration,
  	heavy_heart_exclamation: heavy_heart_exclamation,
  	broken_heart: broken_heart,
  	heart: heart,
  	orange_heart: orange_heart,
  	yellow_heart: yellow_heart,
  	green_heart: green_heart,
  	blue_heart: blue_heart,
  	purple_heart: purple_heart,
  	brown_heart: brown_heart,
  	black_heart: black_heart,
  	white_heart: white_heart,
  	anger: anger,
  	boom: boom,
  	collision: collision,
  	dizzy: dizzy,
  	sweat_drops: sweat_drops,
  	dash: dash,
  	hole: hole,
  	bomb: bomb,
  	speech_balloon: speech_balloon,
  	eye_speech_bubble: eye_speech_bubble,
  	left_speech_bubble: left_speech_bubble,
  	right_anger_bubble: right_anger_bubble,
  	thought_balloon: thought_balloon,
  	zzz: zzz,
  	wave: wave,
  	raised_back_of_hand: raised_back_of_hand,
  	raised_hand_with_fingers_splayed: raised_hand_with_fingers_splayed,
  	hand: hand,
  	raised_hand: raised_hand,
  	vulcan_salute: vulcan_salute,
  	ok_hand: ok_hand,
  	pinched_fingers: pinched_fingers,
  	pinching_hand: pinching_hand,
  	v: v,
  	crossed_fingers: crossed_fingers,
  	love_you_gesture: love_you_gesture,
  	metal: metal,
  	call_me_hand: call_me_hand,
  	point_left: point_left,
  	point_right: point_right,
  	point_up_2: point_up_2,
  	middle_finger: middle_finger,
  	fu: fu,
  	point_down: point_down,
  	point_up: point_up,
  	"+1": "👍",
  	thumbsup: thumbsup,
  	"-1": "👎",
  	thumbsdown: thumbsdown,
  	fist_raised: fist_raised,
  	fist: fist,
  	fist_oncoming: fist_oncoming,
  	facepunch: facepunch,
  	punch: punch,
  	fist_left: fist_left,
  	fist_right: fist_right,
  	clap: clap,
  	raised_hands: raised_hands,
  	open_hands: open_hands,
  	palms_up_together: palms_up_together,
  	handshake: handshake,
  	pray: pray,
  	writing_hand: writing_hand,
  	nail_care: nail_care,
  	selfie: selfie,
  	muscle: muscle,
  	mechanical_arm: mechanical_arm,
  	mechanical_leg: mechanical_leg,
  	leg: leg,
  	foot: foot,
  	ear: ear,
  	ear_with_hearing_aid: ear_with_hearing_aid,
  	nose: nose,
  	brain: brain,
  	anatomical_heart: anatomical_heart,
  	lungs: lungs,
  	tooth: tooth,
  	bone: bone,
  	eyes: eyes,
  	eye: eye,
  	tongue: tongue,
  	lips: lips,
  	baby: baby,
  	child: child,
  	boy: boy,
  	girl: girl,
  	adult: adult,
  	blond_haired_person: blond_haired_person,
  	man: man,
  	bearded_person: bearded_person,
  	red_haired_man: red_haired_man,
  	curly_haired_man: curly_haired_man,
  	white_haired_man: white_haired_man,
  	bald_man: bald_man,
  	woman: woman,
  	red_haired_woman: red_haired_woman,
  	person_red_hair: person_red_hair,
  	curly_haired_woman: curly_haired_woman,
  	person_curly_hair: person_curly_hair,
  	white_haired_woman: white_haired_woman,
  	person_white_hair: person_white_hair,
  	bald_woman: bald_woman,
  	person_bald: person_bald,
  	blond_haired_woman: blond_haired_woman,
  	blonde_woman: blonde_woman,
  	blond_haired_man: blond_haired_man,
  	older_adult: older_adult,
  	older_man: older_man,
  	older_woman: older_woman,
  	frowning_person: frowning_person,
  	frowning_man: frowning_man,
  	frowning_woman: frowning_woman,
  	pouting_face: pouting_face,
  	pouting_man: pouting_man,
  	pouting_woman: pouting_woman,
  	no_good: no_good,
  	no_good_man: no_good_man,
  	ng_man: ng_man,
  	no_good_woman: no_good_woman,
  	ng_woman: ng_woman,
  	ok_person: ok_person,
  	ok_man: ok_man,
  	ok_woman: ok_woman,
  	tipping_hand_person: tipping_hand_person,
  	information_desk_person: information_desk_person,
  	tipping_hand_man: tipping_hand_man,
  	sassy_man: sassy_man,
  	tipping_hand_woman: tipping_hand_woman,
  	sassy_woman: sassy_woman,
  	raising_hand: raising_hand,
  	raising_hand_man: raising_hand_man,
  	raising_hand_woman: raising_hand_woman,
  	deaf_person: deaf_person,
  	deaf_man: deaf_man,
  	deaf_woman: deaf_woman,
  	bow: bow,
  	bowing_man: bowing_man,
  	bowing_woman: bowing_woman,
  	facepalm: facepalm,
  	man_facepalming: man_facepalming,
  	woman_facepalming: woman_facepalming,
  	shrug: shrug,
  	man_shrugging: man_shrugging,
  	woman_shrugging: woman_shrugging,
  	health_worker: health_worker,
  	man_health_worker: man_health_worker,
  	woman_health_worker: woman_health_worker,
  	student: student,
  	man_student: man_student,
  	woman_student: woman_student,
  	teacher: teacher,
  	man_teacher: man_teacher,
  	woman_teacher: woman_teacher,
  	judge: judge,
  	man_judge: man_judge,
  	woman_judge: woman_judge,
  	farmer: farmer,
  	man_farmer: man_farmer,
  	woman_farmer: woman_farmer,
  	cook: cook,
  	man_cook: man_cook,
  	woman_cook: woman_cook,
  	mechanic: mechanic,
  	man_mechanic: man_mechanic,
  	woman_mechanic: woman_mechanic,
  	factory_worker: factory_worker,
  	man_factory_worker: man_factory_worker,
  	woman_factory_worker: woman_factory_worker,
  	office_worker: office_worker,
  	man_office_worker: man_office_worker,
  	woman_office_worker: woman_office_worker,
  	scientist: scientist,
  	man_scientist: man_scientist,
  	woman_scientist: woman_scientist,
  	technologist: technologist,
  	man_technologist: man_technologist,
  	woman_technologist: woman_technologist,
  	singer: singer,
  	man_singer: man_singer,
  	woman_singer: woman_singer,
  	artist: artist,
  	man_artist: man_artist,
  	woman_artist: woman_artist,
  	pilot: pilot,
  	man_pilot: man_pilot,
  	woman_pilot: woman_pilot,
  	astronaut: astronaut,
  	man_astronaut: man_astronaut,
  	woman_astronaut: woman_astronaut,
  	firefighter: firefighter,
  	man_firefighter: man_firefighter,
  	woman_firefighter: woman_firefighter,
  	police_officer: police_officer,
  	cop: cop,
  	policeman: policeman,
  	policewoman: policewoman,
  	detective: detective,
  	male_detective: male_detective,
  	female_detective: female_detective,
  	guard: guard,
  	guardsman: guardsman,
  	guardswoman: guardswoman,
  	ninja: ninja,
  	construction_worker: construction_worker,
  	construction_worker_man: construction_worker_man,
  	construction_worker_woman: construction_worker_woman,
  	prince: prince,
  	princess: princess,
  	person_with_turban: person_with_turban,
  	man_with_turban: man_with_turban,
  	woman_with_turban: woman_with_turban,
  	man_with_gua_pi_mao: man_with_gua_pi_mao,
  	woman_with_headscarf: woman_with_headscarf,
  	person_in_tuxedo: person_in_tuxedo,
  	man_in_tuxedo: man_in_tuxedo,
  	woman_in_tuxedo: woman_in_tuxedo,
  	person_with_veil: person_with_veil,
  	man_with_veil: man_with_veil,
  	woman_with_veil: woman_with_veil,
  	bride_with_veil: bride_with_veil,
  	pregnant_woman: pregnant_woman,
  	breast_feeding: breast_feeding,
  	woman_feeding_baby: woman_feeding_baby,
  	man_feeding_baby: man_feeding_baby,
  	person_feeding_baby: person_feeding_baby,
  	angel: angel,
  	santa: santa,
  	mrs_claus: mrs_claus,
  	mx_claus: mx_claus,
  	superhero: superhero,
  	superhero_man: superhero_man,
  	superhero_woman: superhero_woman,
  	supervillain: supervillain,
  	supervillain_man: supervillain_man,
  	supervillain_woman: supervillain_woman,
  	mage: mage,
  	mage_man: mage_man,
  	mage_woman: mage_woman,
  	fairy: fairy,
  	fairy_man: fairy_man,
  	fairy_woman: fairy_woman,
  	vampire: vampire,
  	vampire_man: vampire_man,
  	vampire_woman: vampire_woman,
  	merperson: merperson,
  	merman: merman,
  	mermaid: mermaid,
  	elf: elf,
  	elf_man: elf_man,
  	elf_woman: elf_woman,
  	genie: genie,
  	genie_man: genie_man,
  	genie_woman: genie_woman,
  	zombie: zombie,
  	zombie_man: zombie_man,
  	zombie_woman: zombie_woman,
  	massage: massage,
  	massage_man: massage_man,
  	massage_woman: massage_woman,
  	haircut: haircut,
  	haircut_man: haircut_man,
  	haircut_woman: haircut_woman,
  	walking: walking,
  	walking_man: walking_man,
  	walking_woman: walking_woman,
  	standing_person: standing_person,
  	standing_man: standing_man,
  	standing_woman: standing_woman,
  	kneeling_person: kneeling_person,
  	kneeling_man: kneeling_man,
  	kneeling_woman: kneeling_woman,
  	person_with_probing_cane: person_with_probing_cane,
  	man_with_probing_cane: man_with_probing_cane,
  	woman_with_probing_cane: woman_with_probing_cane,
  	person_in_motorized_wheelchair: person_in_motorized_wheelchair,
  	man_in_motorized_wheelchair: man_in_motorized_wheelchair,
  	woman_in_motorized_wheelchair: woman_in_motorized_wheelchair,
  	person_in_manual_wheelchair: person_in_manual_wheelchair,
  	man_in_manual_wheelchair: man_in_manual_wheelchair,
  	woman_in_manual_wheelchair: woman_in_manual_wheelchair,
  	runner: runner,
  	running: running,
  	running_man: running_man,
  	running_woman: running_woman,
  	woman_dancing: woman_dancing,
  	dancer: dancer,
  	man_dancing: man_dancing,
  	business_suit_levitating: business_suit_levitating,
  	dancers: dancers,
  	dancing_men: dancing_men,
  	dancing_women: dancing_women,
  	sauna_person: sauna_person,
  	sauna_man: sauna_man,
  	sauna_woman: sauna_woman,
  	climbing: climbing,
  	climbing_man: climbing_man,
  	climbing_woman: climbing_woman,
  	person_fencing: person_fencing,
  	horse_racing: horse_racing,
  	skier: skier,
  	snowboarder: snowboarder,
  	golfing: golfing,
  	golfing_man: golfing_man,
  	golfing_woman: golfing_woman,
  	surfer: surfer,
  	surfing_man: surfing_man,
  	surfing_woman: surfing_woman,
  	rowboat: rowboat,
  	rowing_man: rowing_man,
  	rowing_woman: rowing_woman,
  	swimmer: swimmer,
  	swimming_man: swimming_man,
  	swimming_woman: swimming_woman,
  	bouncing_ball_person: bouncing_ball_person,
  	bouncing_ball_man: bouncing_ball_man,
  	basketball_man: basketball_man,
  	bouncing_ball_woman: bouncing_ball_woman,
  	basketball_woman: basketball_woman,
  	weight_lifting: weight_lifting,
  	weight_lifting_man: weight_lifting_man,
  	weight_lifting_woman: weight_lifting_woman,
  	bicyclist: bicyclist,
  	biking_man: biking_man,
  	biking_woman: biking_woman,
  	mountain_bicyclist: mountain_bicyclist,
  	mountain_biking_man: mountain_biking_man,
  	mountain_biking_woman: mountain_biking_woman,
  	cartwheeling: cartwheeling,
  	man_cartwheeling: man_cartwheeling,
  	woman_cartwheeling: woman_cartwheeling,
  	wrestling: wrestling,
  	men_wrestling: men_wrestling,
  	women_wrestling: women_wrestling,
  	water_polo: water_polo,
  	man_playing_water_polo: man_playing_water_polo,
  	woman_playing_water_polo: woman_playing_water_polo,
  	handball_person: handball_person,
  	man_playing_handball: man_playing_handball,
  	woman_playing_handball: woman_playing_handball,
  	juggling_person: juggling_person,
  	man_juggling: man_juggling,
  	woman_juggling: woman_juggling,
  	lotus_position: lotus_position,
  	lotus_position_man: lotus_position_man,
  	lotus_position_woman: lotus_position_woman,
  	bath: bath,
  	sleeping_bed: sleeping_bed,
  	people_holding_hands: people_holding_hands,
  	two_women_holding_hands: two_women_holding_hands,
  	couple: couple,
  	two_men_holding_hands: two_men_holding_hands,
  	couplekiss: couplekiss,
  	couplekiss_man_woman: couplekiss_man_woman,
  	couplekiss_man_man: couplekiss_man_man,
  	couplekiss_woman_woman: couplekiss_woman_woman,
  	couple_with_heart: couple_with_heart,
  	couple_with_heart_woman_man: couple_with_heart_woman_man,
  	couple_with_heart_man_man: couple_with_heart_man_man,
  	couple_with_heart_woman_woman: couple_with_heart_woman_woman,
  	family: family,
  	family_man_woman_boy: family_man_woman_boy,
  	family_man_woman_girl: family_man_woman_girl,
  	family_man_woman_girl_boy: family_man_woman_girl_boy,
  	family_man_woman_boy_boy: family_man_woman_boy_boy,
  	family_man_woman_girl_girl: family_man_woman_girl_girl,
  	family_man_man_boy: family_man_man_boy,
  	family_man_man_girl: family_man_man_girl,
  	family_man_man_girl_boy: family_man_man_girl_boy,
  	family_man_man_boy_boy: family_man_man_boy_boy,
  	family_man_man_girl_girl: family_man_man_girl_girl,
  	family_woman_woman_boy: family_woman_woman_boy,
  	family_woman_woman_girl: family_woman_woman_girl,
  	family_woman_woman_girl_boy: family_woman_woman_girl_boy,
  	family_woman_woman_boy_boy: family_woman_woman_boy_boy,
  	family_woman_woman_girl_girl: family_woman_woman_girl_girl,
  	family_man_boy: family_man_boy,
  	family_man_boy_boy: family_man_boy_boy,
  	family_man_girl: family_man_girl,
  	family_man_girl_boy: family_man_girl_boy,
  	family_man_girl_girl: family_man_girl_girl,
  	family_woman_boy: family_woman_boy,
  	family_woman_boy_boy: family_woman_boy_boy,
  	family_woman_girl: family_woman_girl,
  	family_woman_girl_boy: family_woman_girl_boy,
  	family_woman_girl_girl: family_woman_girl_girl,
  	speaking_head: speaking_head,
  	bust_in_silhouette: bust_in_silhouette,
  	busts_in_silhouette: busts_in_silhouette,
  	people_hugging: people_hugging,
  	footprints: footprints,
  	monkey_face: monkey_face,
  	monkey: monkey,
  	gorilla: gorilla,
  	orangutan: orangutan,
  	dog: dog,
  	dog2: dog2,
  	guide_dog: guide_dog,
  	service_dog: service_dog,
  	poodle: poodle,
  	wolf: wolf,
  	fox_face: fox_face,
  	raccoon: raccoon,
  	cat: cat,
  	cat2: cat2,
  	black_cat: black_cat,
  	lion: lion,
  	tiger: tiger,
  	tiger2: tiger2,
  	leopard: leopard,
  	horse: horse,
  	racehorse: racehorse,
  	unicorn: unicorn,
  	zebra: zebra,
  	deer: deer,
  	bison: bison,
  	cow: cow,
  	ox: ox,
  	water_buffalo: water_buffalo,
  	cow2: cow2,
  	pig: pig,
  	pig2: pig2,
  	boar: boar,
  	pig_nose: pig_nose,
  	ram: ram,
  	sheep: sheep,
  	goat: goat,
  	dromedary_camel: dromedary_camel,
  	camel: camel,
  	llama: llama,
  	giraffe: giraffe,
  	elephant: elephant,
  	mammoth: mammoth,
  	rhinoceros: rhinoceros,
  	hippopotamus: hippopotamus,
  	mouse: mouse,
  	mouse2: mouse2,
  	rat: rat,
  	hamster: hamster,
  	rabbit: rabbit,
  	rabbit2: rabbit2,
  	chipmunk: chipmunk,
  	beaver: beaver,
  	hedgehog: hedgehog,
  	bat: bat,
  	bear: bear,
  	polar_bear: polar_bear,
  	koala: koala,
  	panda_face: panda_face,
  	sloth: sloth,
  	otter: otter,
  	skunk: skunk,
  	kangaroo: kangaroo,
  	badger: badger,
  	feet: feet,
  	paw_prints: paw_prints,
  	turkey: turkey,
  	chicken: chicken,
  	rooster: rooster,
  	hatching_chick: hatching_chick,
  	baby_chick: baby_chick,
  	hatched_chick: hatched_chick,
  	bird: bird,
  	penguin: penguin,
  	dove: dove,
  	eagle: eagle,
  	duck: duck,
  	swan: swan,
  	owl: owl,
  	dodo: dodo,
  	feather: feather,
  	flamingo: flamingo,
  	peacock: peacock,
  	parrot: parrot,
  	frog: frog,
  	crocodile: crocodile,
  	turtle: turtle,
  	lizard: lizard,
  	snake: snake,
  	dragon_face: dragon_face,
  	dragon: dragon,
  	sauropod: sauropod,
  	"t-rex": "🦖",
  	whale: whale,
  	whale2: whale2,
  	dolphin: dolphin,
  	flipper: flipper,
  	seal: seal,
  	fish: fish,
  	tropical_fish: tropical_fish,
  	blowfish: blowfish,
  	shark: shark,
  	octopus: octopus,
  	shell: shell,
  	snail: snail,
  	butterfly: butterfly,
  	bug: bug,
  	ant: ant,
  	bee: bee,
  	honeybee: honeybee,
  	beetle: beetle,
  	lady_beetle: lady_beetle,
  	cricket: cricket,
  	cockroach: cockroach,
  	spider: spider,
  	spider_web: spider_web,
  	scorpion: scorpion,
  	mosquito: mosquito,
  	fly: fly,
  	worm: worm,
  	microbe: microbe,
  	bouquet: bouquet,
  	cherry_blossom: cherry_blossom,
  	white_flower: white_flower,
  	rosette: rosette,
  	rose: rose,
  	wilted_flower: wilted_flower,
  	hibiscus: hibiscus,
  	sunflower: sunflower,
  	blossom: blossom,
  	tulip: tulip,
  	seedling: seedling,
  	potted_plant: potted_plant,
  	evergreen_tree: evergreen_tree,
  	deciduous_tree: deciduous_tree,
  	palm_tree: palm_tree,
  	cactus: cactus,
  	ear_of_rice: ear_of_rice,
  	herb: herb,
  	shamrock: shamrock,
  	four_leaf_clover: four_leaf_clover,
  	maple_leaf: maple_leaf,
  	fallen_leaf: fallen_leaf,
  	leaves: leaves,
  	grapes: grapes,
  	melon: melon,
  	watermelon: watermelon,
  	tangerine: tangerine,
  	orange: orange,
  	mandarin: mandarin,
  	lemon: lemon,
  	banana: banana,
  	pineapple: pineapple,
  	mango: mango,
  	apple: apple,
  	green_apple: green_apple,
  	pear: pear,
  	peach: peach,
  	cherries: cherries,
  	strawberry: strawberry,
  	blueberries: blueberries,
  	kiwi_fruit: kiwi_fruit,
  	tomato: tomato,
  	olive: olive,
  	coconut: coconut,
  	avocado: avocado,
  	eggplant: eggplant,
  	potato: potato,
  	carrot: carrot,
  	corn: corn,
  	hot_pepper: hot_pepper,
  	bell_pepper: bell_pepper,
  	cucumber: cucumber,
  	leafy_green: leafy_green,
  	broccoli: broccoli,
  	garlic: garlic,
  	onion: onion,
  	mushroom: mushroom,
  	peanuts: peanuts,
  	chestnut: chestnut,
  	bread: bread,
  	croissant: croissant,
  	baguette_bread: baguette_bread,
  	flatbread: flatbread,
  	pretzel: pretzel,
  	bagel: bagel,
  	pancakes: pancakes,
  	waffle: waffle,
  	cheese: cheese,
  	meat_on_bone: meat_on_bone,
  	poultry_leg: poultry_leg,
  	cut_of_meat: cut_of_meat,
  	bacon: bacon,
  	hamburger: hamburger,
  	fries: fries,
  	pizza: pizza,
  	hotdog: hotdog,
  	sandwich: sandwich,
  	taco: taco,
  	burrito: burrito,
  	tamale: tamale,
  	stuffed_flatbread: stuffed_flatbread,
  	falafel: falafel,
  	egg: egg,
  	fried_egg: fried_egg,
  	shallow_pan_of_food: shallow_pan_of_food,
  	stew: stew,
  	fondue: fondue,
  	bowl_with_spoon: bowl_with_spoon,
  	green_salad: green_salad,
  	popcorn: popcorn,
  	butter: butter,
  	salt: salt,
  	canned_food: canned_food,
  	bento: bento,
  	rice_cracker: rice_cracker,
  	rice_ball: rice_ball,
  	rice: rice,
  	curry: curry,
  	ramen: ramen,
  	spaghetti: spaghetti,
  	sweet_potato: sweet_potato,
  	oden: oden,
  	sushi: sushi,
  	fried_shrimp: fried_shrimp,
  	fish_cake: fish_cake,
  	moon_cake: moon_cake,
  	dango: dango,
  	dumpling: dumpling,
  	fortune_cookie: fortune_cookie,
  	takeout_box: takeout_box,
  	crab: crab,
  	lobster: lobster,
  	shrimp: shrimp,
  	squid: squid,
  	oyster: oyster,
  	icecream: icecream,
  	shaved_ice: shaved_ice,
  	ice_cream: ice_cream,
  	doughnut: doughnut,
  	cookie: cookie,
  	birthday: birthday,
  	cake: cake,
  	cupcake: cupcake,
  	pie: pie,
  	chocolate_bar: chocolate_bar,
  	candy: candy,
  	lollipop: lollipop,
  	custard: custard,
  	honey_pot: honey_pot,
  	baby_bottle: baby_bottle,
  	milk_glass: milk_glass,
  	coffee: coffee,
  	teapot: teapot,
  	tea: tea,
  	sake: sake,
  	champagne: champagne,
  	wine_glass: wine_glass,
  	cocktail: cocktail,
  	tropical_drink: tropical_drink,
  	beer: beer,
  	beers: beers,
  	clinking_glasses: clinking_glasses,
  	tumbler_glass: tumbler_glass,
  	cup_with_straw: cup_with_straw,
  	bubble_tea: bubble_tea,
  	beverage_box: beverage_box,
  	mate: mate,
  	ice_cube: ice_cube,
  	chopsticks: chopsticks,
  	plate_with_cutlery: plate_with_cutlery,
  	fork_and_knife: fork_and_knife,
  	spoon: spoon,
  	hocho: hocho,
  	knife: knife,
  	amphora: amphora,
  	earth_africa: earth_africa,
  	earth_americas: earth_americas,
  	earth_asia: earth_asia,
  	globe_with_meridians: globe_with_meridians,
  	world_map: world_map,
  	japan: japan,
  	compass: compass,
  	mountain_snow: mountain_snow,
  	mountain: mountain,
  	volcano: volcano,
  	mount_fuji: mount_fuji,
  	camping: camping,
  	beach_umbrella: beach_umbrella,
  	desert: desert,
  	desert_island: desert_island,
  	national_park: national_park,
  	stadium: stadium,
  	classical_building: classical_building,
  	building_construction: building_construction,
  	bricks: bricks,
  	rock: rock,
  	wood: wood,
  	hut: hut,
  	houses: houses,
  	derelict_house: derelict_house,
  	house: house,
  	house_with_garden: house_with_garden,
  	office: office,
  	post_office: post_office,
  	european_post_office: european_post_office,
  	hospital: hospital,
  	bank: bank,
  	hotel: hotel,
  	love_hotel: love_hotel,
  	convenience_store: convenience_store,
  	school: school,
  	department_store: department_store,
  	factory: factory,
  	japanese_castle: japanese_castle,
  	european_castle: european_castle,
  	wedding: wedding,
  	tokyo_tower: tokyo_tower,
  	statue_of_liberty: statue_of_liberty,
  	church: church,
  	mosque: mosque,
  	hindu_temple: hindu_temple,
  	synagogue: synagogue,
  	shinto_shrine: shinto_shrine,
  	kaaba: kaaba,
  	fountain: fountain,
  	tent: tent,
  	foggy: foggy,
  	night_with_stars: night_with_stars,
  	cityscape: cityscape,
  	sunrise_over_mountains: sunrise_over_mountains,
  	sunrise: sunrise,
  	city_sunset: city_sunset,
  	city_sunrise: city_sunrise,
  	bridge_at_night: bridge_at_night,
  	hotsprings: hotsprings,
  	carousel_horse: carousel_horse,
  	ferris_wheel: ferris_wheel,
  	roller_coaster: roller_coaster,
  	barber: barber,
  	circus_tent: circus_tent,
  	steam_locomotive: steam_locomotive,
  	railway_car: railway_car,
  	bullettrain_side: bullettrain_side,
  	bullettrain_front: bullettrain_front,
  	train2: train2,
  	metro: metro,
  	light_rail: light_rail,
  	station: station,
  	tram: tram,
  	monorail: monorail,
  	mountain_railway: mountain_railway,
  	train: train,
  	bus: bus,
  	oncoming_bus: oncoming_bus,
  	trolleybus: trolleybus,
  	minibus: minibus,
  	ambulance: ambulance,
  	fire_engine: fire_engine,
  	police_car: police_car,
  	oncoming_police_car: oncoming_police_car,
  	taxi: taxi,
  	oncoming_taxi: oncoming_taxi,
  	car: car,
  	red_car: red_car,
  	oncoming_automobile: oncoming_automobile,
  	blue_car: blue_car,
  	pickup_truck: pickup_truck,
  	truck: truck,
  	articulated_lorry: articulated_lorry,
  	tractor: tractor,
  	racing_car: racing_car,
  	motorcycle: motorcycle,
  	motor_scooter: motor_scooter,
  	manual_wheelchair: manual_wheelchair,
  	motorized_wheelchair: motorized_wheelchair,
  	auto_rickshaw: auto_rickshaw,
  	bike: bike,
  	kick_scooter: kick_scooter,
  	skateboard: skateboard,
  	roller_skate: roller_skate,
  	busstop: busstop,
  	motorway: motorway,
  	railway_track: railway_track,
  	oil_drum: oil_drum,
  	fuelpump: fuelpump,
  	rotating_light: rotating_light,
  	traffic_light: traffic_light,
  	vertical_traffic_light: vertical_traffic_light,
  	stop_sign: stop_sign,
  	construction: construction,
  	anchor: anchor,
  	boat: boat,
  	sailboat: sailboat,
  	canoe: canoe,
  	speedboat: speedboat,
  	passenger_ship: passenger_ship,
  	ferry: ferry,
  	motor_boat: motor_boat,
  	ship: ship,
  	airplane: airplane,
  	small_airplane: small_airplane,
  	flight_departure: flight_departure,
  	flight_arrival: flight_arrival,
  	parachute: parachute,
  	seat: seat,
  	helicopter: helicopter,
  	suspension_railway: suspension_railway,
  	mountain_cableway: mountain_cableway,
  	aerial_tramway: aerial_tramway,
  	artificial_satellite: artificial_satellite,
  	rocket: rocket,
  	flying_saucer: flying_saucer,
  	bellhop_bell: bellhop_bell,
  	luggage: luggage,
  	hourglass: hourglass,
  	hourglass_flowing_sand: hourglass_flowing_sand,
  	watch: watch,
  	alarm_clock: alarm_clock,
  	stopwatch: stopwatch,
  	timer_clock: timer_clock,
  	mantelpiece_clock: mantelpiece_clock,
  	clock12: clock12,
  	clock1230: clock1230,
  	clock1: clock1,
  	clock130: clock130,
  	clock2: clock2,
  	clock230: clock230,
  	clock3: clock3,
  	clock330: clock330,
  	clock4: clock4,
  	clock430: clock430,
  	clock5: clock5,
  	clock530: clock530,
  	clock6: clock6,
  	clock630: clock630,
  	clock7: clock7,
  	clock730: clock730,
  	clock8: clock8,
  	clock830: clock830,
  	clock9: clock9,
  	clock930: clock930,
  	clock10: clock10,
  	clock1030: clock1030,
  	clock11: clock11,
  	clock1130: clock1130,
  	new_moon: new_moon,
  	waxing_crescent_moon: waxing_crescent_moon,
  	first_quarter_moon: first_quarter_moon,
  	moon: moon,
  	waxing_gibbous_moon: waxing_gibbous_moon,
  	full_moon: full_moon,
  	waning_gibbous_moon: waning_gibbous_moon,
  	last_quarter_moon: last_quarter_moon,
  	waning_crescent_moon: waning_crescent_moon,
  	crescent_moon: crescent_moon,
  	new_moon_with_face: new_moon_with_face,
  	first_quarter_moon_with_face: first_quarter_moon_with_face,
  	last_quarter_moon_with_face: last_quarter_moon_with_face,
  	thermometer: thermometer,
  	sunny: sunny,
  	full_moon_with_face: full_moon_with_face,
  	sun_with_face: sun_with_face,
  	ringed_planet: ringed_planet,
  	star: star,
  	star2: star2,
  	stars: stars,
  	milky_way: milky_way,
  	cloud: cloud,
  	partly_sunny: partly_sunny,
  	cloud_with_lightning_and_rain: cloud_with_lightning_and_rain,
  	sun_behind_small_cloud: sun_behind_small_cloud,
  	sun_behind_large_cloud: sun_behind_large_cloud,
  	sun_behind_rain_cloud: sun_behind_rain_cloud,
  	cloud_with_rain: cloud_with_rain,
  	cloud_with_snow: cloud_with_snow,
  	cloud_with_lightning: cloud_with_lightning,
  	tornado: tornado,
  	fog: fog,
  	wind_face: wind_face,
  	cyclone: cyclone,
  	rainbow: rainbow,
  	closed_umbrella: closed_umbrella,
  	open_umbrella: open_umbrella,
  	umbrella: umbrella,
  	parasol_on_ground: parasol_on_ground,
  	zap: zap,
  	snowflake: snowflake,
  	snowman_with_snow: snowman_with_snow,
  	snowman: snowman,
  	comet: comet,
  	fire: fire,
  	droplet: droplet,
  	ocean: ocean,
  	jack_o_lantern: jack_o_lantern,
  	christmas_tree: christmas_tree,
  	fireworks: fireworks,
  	sparkler: sparkler,
  	firecracker: firecracker,
  	sparkles: sparkles,
  	balloon: balloon,
  	tada: tada,
  	confetti_ball: confetti_ball,
  	tanabata_tree: tanabata_tree,
  	bamboo: bamboo,
  	dolls: dolls,
  	flags: flags,
  	wind_chime: wind_chime,
  	rice_scene: rice_scene,
  	red_envelope: red_envelope,
  	ribbon: ribbon,
  	gift: gift,
  	reminder_ribbon: reminder_ribbon,
  	tickets: tickets,
  	ticket: ticket,
  	medal_military: medal_military,
  	trophy: trophy,
  	medal_sports: medal_sports,
  	"1st_place_medal": "🥇",
  	"2nd_place_medal": "🥈",
  	"3rd_place_medal": "🥉",
  	soccer: soccer,
  	baseball: baseball,
  	softball: softball,
  	basketball: basketball,
  	volleyball: volleyball,
  	football: football,
  	rugby_football: rugby_football,
  	tennis: tennis,
  	flying_disc: flying_disc,
  	bowling: bowling,
  	cricket_game: cricket_game,
  	field_hockey: field_hockey,
  	ice_hockey: ice_hockey,
  	lacrosse: lacrosse,
  	ping_pong: ping_pong,
  	badminton: badminton,
  	boxing_glove: boxing_glove,
  	martial_arts_uniform: martial_arts_uniform,
  	goal_net: goal_net,
  	golf: golf,
  	ice_skate: ice_skate,
  	fishing_pole_and_fish: fishing_pole_and_fish,
  	diving_mask: diving_mask,
  	running_shirt_with_sash: running_shirt_with_sash,
  	ski: ski,
  	sled: sled,
  	curling_stone: curling_stone,
  	dart: dart,
  	yo_yo: yo_yo,
  	kite: kite,
  	"8ball": "🎱",
  	crystal_ball: crystal_ball,
  	magic_wand: magic_wand,
  	nazar_amulet: nazar_amulet,
  	video_game: video_game,
  	joystick: joystick,
  	slot_machine: slot_machine,
  	game_die: game_die,
  	jigsaw: jigsaw,
  	teddy_bear: teddy_bear,
  	pi_ata: pi_ata,
  	nesting_dolls: nesting_dolls,
  	spades: spades,
  	hearts: hearts,
  	diamonds: diamonds,
  	clubs: clubs,
  	chess_pawn: chess_pawn,
  	black_joker: black_joker,
  	mahjong: mahjong,
  	flower_playing_cards: flower_playing_cards,
  	performing_arts: performing_arts,
  	framed_picture: framed_picture,
  	art: art,
  	thread: thread,
  	sewing_needle: sewing_needle,
  	yarn: yarn,
  	knot: knot,
  	eyeglasses: eyeglasses,
  	dark_sunglasses: dark_sunglasses,
  	goggles: goggles,
  	lab_coat: lab_coat,
  	safety_vest: safety_vest,
  	necktie: necktie,
  	shirt: shirt,
  	tshirt: tshirt,
  	jeans: jeans,
  	scarf: scarf,
  	gloves: gloves,
  	coat: coat,
  	socks: socks,
  	dress: dress,
  	kimono: kimono,
  	sari: sari,
  	one_piece_swimsuit: one_piece_swimsuit,
  	swim_brief: swim_brief,
  	shorts: shorts,
  	bikini: bikini,
  	womans_clothes: womans_clothes,
  	purse: purse,
  	handbag: handbag,
  	pouch: pouch,
  	shopping: shopping,
  	school_satchel: school_satchel,
  	thong_sandal: thong_sandal,
  	mans_shoe: mans_shoe,
  	shoe: shoe,
  	athletic_shoe: athletic_shoe,
  	hiking_boot: hiking_boot,
  	flat_shoe: flat_shoe,
  	high_heel: high_heel,
  	sandal: sandal,
  	ballet_shoes: ballet_shoes,
  	boot: boot,
  	crown: crown,
  	womans_hat: womans_hat,
  	tophat: tophat,
  	mortar_board: mortar_board,
  	billed_cap: billed_cap,
  	military_helmet: military_helmet,
  	rescue_worker_helmet: rescue_worker_helmet,
  	prayer_beads: prayer_beads,
  	lipstick: lipstick,
  	ring: ring,
  	gem: gem,
  	mute: mute,
  	speaker: speaker,
  	sound: sound,
  	loud_sound: loud_sound,
  	loudspeaker: loudspeaker,
  	mega: mega,
  	postal_horn: postal_horn,
  	bell: bell,
  	no_bell: no_bell,
  	musical_score: musical_score,
  	musical_note: musical_note,
  	notes: notes,
  	studio_microphone: studio_microphone,
  	level_slider: level_slider,
  	control_knobs: control_knobs,
  	microphone: microphone,
  	headphones: headphones,
  	radio: radio,
  	saxophone: saxophone,
  	accordion: accordion,
  	guitar: guitar,
  	musical_keyboard: musical_keyboard,
  	trumpet: trumpet,
  	violin: violin,
  	banjo: banjo,
  	drum: drum,
  	long_drum: long_drum,
  	iphone: iphone,
  	calling: calling,
  	phone: phone,
  	telephone: telephone,
  	telephone_receiver: telephone_receiver,
  	pager: pager,
  	fax: fax,
  	battery: battery,
  	electric_plug: electric_plug,
  	computer: computer,
  	desktop_computer: desktop_computer,
  	printer: printer,
  	keyboard: keyboard,
  	computer_mouse: computer_mouse,
  	trackball: trackball,
  	minidisc: minidisc,
  	floppy_disk: floppy_disk,
  	cd: cd,
  	dvd: dvd,
  	abacus: abacus,
  	movie_camera: movie_camera,
  	film_strip: film_strip,
  	film_projector: film_projector,
  	clapper: clapper,
  	tv: tv,
  	camera: camera,
  	camera_flash: camera_flash,
  	video_camera: video_camera,
  	vhs: vhs,
  	mag: mag,
  	mag_right: mag_right,
  	candle: candle,
  	bulb: bulb,
  	flashlight: flashlight,
  	izakaya_lantern: izakaya_lantern,
  	lantern: lantern,
  	diya_lamp: diya_lamp,
  	notebook_with_decorative_cover: notebook_with_decorative_cover,
  	closed_book: closed_book,
  	book: book,
  	open_book: open_book,
  	green_book: green_book,
  	blue_book: blue_book,
  	orange_book: orange_book,
  	books: books,
  	notebook: notebook,
  	ledger: ledger,
  	page_with_curl: page_with_curl,
  	scroll: scroll,
  	page_facing_up: page_facing_up,
  	newspaper: newspaper,
  	newspaper_roll: newspaper_roll,
  	bookmark_tabs: bookmark_tabs,
  	bookmark: bookmark,
  	label: label,
  	moneybag: moneybag,
  	coin: coin,
  	yen: yen,
  	dollar: dollar,
  	euro: euro,
  	pound: pound,
  	money_with_wings: money_with_wings,
  	credit_card: credit_card,
  	receipt: receipt,
  	chart: chart,
  	email: email,
  	envelope: envelope,
  	"e-mail": "📧",
  	incoming_envelope: incoming_envelope,
  	envelope_with_arrow: envelope_with_arrow,
  	outbox_tray: outbox_tray,
  	inbox_tray: inbox_tray,
  	"package": "📦",
  	mailbox: mailbox,
  	mailbox_closed: mailbox_closed,
  	mailbox_with_mail: mailbox_with_mail,
  	mailbox_with_no_mail: mailbox_with_no_mail,
  	postbox: postbox,
  	ballot_box: ballot_box,
  	pencil2: pencil2,
  	black_nib: black_nib,
  	fountain_pen: fountain_pen,
  	pen: pen,
  	paintbrush: paintbrush,
  	crayon: crayon,
  	memo: memo,
  	pencil: pencil,
  	briefcase: briefcase,
  	file_folder: file_folder,
  	open_file_folder: open_file_folder,
  	card_index_dividers: card_index_dividers,
  	date: date,
  	calendar: calendar,
  	spiral_notepad: spiral_notepad,
  	spiral_calendar: spiral_calendar,
  	card_index: card_index,
  	chart_with_upwards_trend: chart_with_upwards_trend,
  	chart_with_downwards_trend: chart_with_downwards_trend,
  	bar_chart: bar_chart,
  	clipboard: clipboard,
  	pushpin: pushpin,
  	round_pushpin: round_pushpin,
  	paperclip: paperclip,
  	paperclips: paperclips,
  	straight_ruler: straight_ruler,
  	triangular_ruler: triangular_ruler,
  	scissors: scissors,
  	card_file_box: card_file_box,
  	file_cabinet: file_cabinet,
  	wastebasket: wastebasket,
  	lock: lock,
  	unlock: unlock,
  	lock_with_ink_pen: lock_with_ink_pen,
  	closed_lock_with_key: closed_lock_with_key,
  	key: key,
  	old_key: old_key,
  	hammer: hammer,
  	axe: axe,
  	pick: pick,
  	hammer_and_pick: hammer_and_pick,
  	hammer_and_wrench: hammer_and_wrench,
  	dagger: dagger,
  	crossed_swords: crossed_swords,
  	gun: gun,
  	boomerang: boomerang,
  	bow_and_arrow: bow_and_arrow,
  	shield: shield,
  	carpentry_saw: carpentry_saw,
  	wrench: wrench,
  	screwdriver: screwdriver,
  	nut_and_bolt: nut_and_bolt,
  	gear: gear,
  	clamp: clamp,
  	balance_scale: balance_scale,
  	probing_cane: probing_cane,
  	link: link,
  	chains: chains,
  	hook: hook,
  	toolbox: toolbox,
  	magnet: magnet,
  	ladder: ladder,
  	alembic: alembic,
  	test_tube: test_tube,
  	petri_dish: petri_dish,
  	dna: dna,
  	microscope: microscope,
  	telescope: telescope,
  	satellite: satellite,
  	syringe: syringe,
  	drop_of_blood: drop_of_blood,
  	pill: pill,
  	adhesive_bandage: adhesive_bandage,
  	stethoscope: stethoscope,
  	door: door,
  	elevator: elevator,
  	mirror: mirror,
  	window: window,
  	bed: bed,
  	couch_and_lamp: couch_and_lamp,
  	chair: chair,
  	toilet: toilet,
  	plunger: plunger,
  	shower: shower,
  	bathtub: bathtub,
  	mouse_trap: mouse_trap,
  	razor: razor,
  	lotion_bottle: lotion_bottle,
  	safety_pin: safety_pin,
  	broom: broom,
  	basket: basket,
  	roll_of_paper: roll_of_paper,
  	bucket: bucket,
  	soap: soap,
  	toothbrush: toothbrush,
  	sponge: sponge,
  	fire_extinguisher: fire_extinguisher,
  	shopping_cart: shopping_cart,
  	smoking: smoking,
  	coffin: coffin,
  	headstone: headstone,
  	funeral_urn: funeral_urn,
  	moyai: moyai,
  	placard: placard,
  	atm: atm,
  	put_litter_in_its_place: put_litter_in_its_place,
  	potable_water: potable_water,
  	wheelchair: wheelchair,
  	mens: mens,
  	womens: womens,
  	restroom: restroom,
  	baby_symbol: baby_symbol,
  	wc: wc,
  	passport_control: passport_control,
  	customs: customs,
  	baggage_claim: baggage_claim,
  	left_luggage: left_luggage,
  	warning: warning,
  	children_crossing: children_crossing,
  	no_entry: no_entry,
  	no_entry_sign: no_entry_sign,
  	no_bicycles: no_bicycles,
  	no_smoking: no_smoking,
  	do_not_litter: do_not_litter,
  	"non-potable_water": "🚱",
  	no_pedestrians: no_pedestrians,
  	no_mobile_phones: no_mobile_phones,
  	underage: underage,
  	radioactive: radioactive,
  	biohazard: biohazard,
  	arrow_up: arrow_up,
  	arrow_upper_right: arrow_upper_right,
  	arrow_right: arrow_right,
  	arrow_lower_right: arrow_lower_right,
  	arrow_down: arrow_down,
  	arrow_lower_left: arrow_lower_left,
  	arrow_left: arrow_left,
  	arrow_upper_left: arrow_upper_left,
  	arrow_up_down: arrow_up_down,
  	left_right_arrow: left_right_arrow,
  	leftwards_arrow_with_hook: leftwards_arrow_with_hook,
  	arrow_right_hook: arrow_right_hook,
  	arrow_heading_up: arrow_heading_up,
  	arrow_heading_down: arrow_heading_down,
  	arrows_clockwise: arrows_clockwise,
  	arrows_counterclockwise: arrows_counterclockwise,
  	back: back,
  	end: end,
  	on: on,
  	soon: soon,
  	top: top,
  	place_of_worship: place_of_worship,
  	atom_symbol: atom_symbol,
  	om: om,
  	star_of_david: star_of_david,
  	wheel_of_dharma: wheel_of_dharma,
  	yin_yang: yin_yang,
  	latin_cross: latin_cross,
  	orthodox_cross: orthodox_cross,
  	star_and_crescent: star_and_crescent,
  	peace_symbol: peace_symbol,
  	menorah: menorah,
  	six_pointed_star: six_pointed_star,
  	aries: aries,
  	taurus: taurus,
  	gemini: gemini,
  	cancer: cancer,
  	leo: leo,
  	virgo: virgo,
  	libra: libra,
  	scorpius: scorpius,
  	sagittarius: sagittarius,
  	capricorn: capricorn,
  	aquarius: aquarius,
  	pisces: pisces,
  	ophiuchus: ophiuchus,
  	twisted_rightwards_arrows: twisted_rightwards_arrows,
  	repeat: repeat,
  	repeat_one: repeat_one,
  	arrow_forward: arrow_forward,
  	fast_forward: fast_forward,
  	next_track_button: next_track_button,
  	play_or_pause_button: play_or_pause_button,
  	arrow_backward: arrow_backward,
  	rewind: rewind,
  	previous_track_button: previous_track_button,
  	arrow_up_small: arrow_up_small,
  	arrow_double_up: arrow_double_up,
  	arrow_down_small: arrow_down_small,
  	arrow_double_down: arrow_double_down,
  	pause_button: pause_button,
  	stop_button: stop_button,
  	record_button: record_button,
  	eject_button: eject_button,
  	cinema: cinema,
  	low_brightness: low_brightness,
  	high_brightness: high_brightness,
  	signal_strength: signal_strength,
  	vibration_mode: vibration_mode,
  	mobile_phone_off: mobile_phone_off,
  	female_sign: female_sign,
  	male_sign: male_sign,
  	transgender_symbol: transgender_symbol,
  	heavy_multiplication_x: heavy_multiplication_x,
  	heavy_plus_sign: heavy_plus_sign,
  	heavy_minus_sign: heavy_minus_sign,
  	heavy_division_sign: heavy_division_sign,
  	infinity: infinity,
  	bangbang: bangbang,
  	interrobang: interrobang,
  	question: question,
  	grey_question: grey_question,
  	grey_exclamation: grey_exclamation,
  	exclamation: exclamation,
  	heavy_exclamation_mark: heavy_exclamation_mark,
  	wavy_dash: wavy_dash,
  	currency_exchange: currency_exchange,
  	heavy_dollar_sign: heavy_dollar_sign,
  	medical_symbol: medical_symbol,
  	recycle: recycle,
  	fleur_de_lis: fleur_de_lis,
  	trident: trident,
  	name_badge: name_badge,
  	beginner: beginner,
  	o: o,
  	white_check_mark: white_check_mark,
  	ballot_box_with_check: ballot_box_with_check,
  	heavy_check_mark: heavy_check_mark,
  	x: x,
  	negative_squared_cross_mark: negative_squared_cross_mark,
  	curly_loop: curly_loop,
  	loop: loop,
  	part_alternation_mark: part_alternation_mark,
  	eight_spoked_asterisk: eight_spoked_asterisk,
  	eight_pointed_black_star: eight_pointed_black_star,
  	sparkle: sparkle,
  	copyright: copyright,
  	registered: registered,
  	tm: tm,
  	hash: hash,
  	asterisk: asterisk,
  	zero: zero,
  	one: one,
  	two: two,
  	three: three,
  	four: four,
  	five: five,
  	six: six,
  	seven: seven,
  	eight: eight,
  	nine: nine,
  	keycap_ten: keycap_ten,
  	capital_abcd: capital_abcd,
  	abcd: abcd,
  	symbols: symbols,
  	abc: abc,
  	a: a,
  	ab: ab,
  	b: b,
  	cl: cl,
  	cool: cool,
  	free: free,
  	information_source: information_source,
  	id: id,
  	m: m,
  	"new": "🆕",
  	ng: ng,
  	o2: o2,
  	ok: ok,
  	parking: parking,
  	sos: sos,
  	up: up,
  	vs: vs,
  	koko: koko,
  	sa: sa,
  	ideograph_advantage: ideograph_advantage,
  	accept: accept,
  	congratulations: congratulations,
  	secret: secret,
  	u6e80: u6e80,
  	red_circle: red_circle,
  	orange_circle: orange_circle,
  	yellow_circle: yellow_circle,
  	green_circle: green_circle,
  	large_blue_circle: large_blue_circle,
  	purple_circle: purple_circle,
  	brown_circle: brown_circle,
  	black_circle: black_circle,
  	white_circle: white_circle,
  	red_square: red_square,
  	orange_square: orange_square,
  	yellow_square: yellow_square,
  	green_square: green_square,
  	blue_square: blue_square,
  	purple_square: purple_square,
  	brown_square: brown_square,
  	black_large_square: black_large_square,
  	white_large_square: white_large_square,
  	black_medium_square: black_medium_square,
  	white_medium_square: white_medium_square,
  	black_medium_small_square: black_medium_small_square,
  	white_medium_small_square: white_medium_small_square,
  	black_small_square: black_small_square,
  	white_small_square: white_small_square,
  	large_orange_diamond: large_orange_diamond,
  	large_blue_diamond: large_blue_diamond,
  	small_orange_diamond: small_orange_diamond,
  	small_blue_diamond: small_blue_diamond,
  	small_red_triangle: small_red_triangle,
  	small_red_triangle_down: small_red_triangle_down,
  	diamond_shape_with_a_dot_inside: diamond_shape_with_a_dot_inside,
  	radio_button: radio_button,
  	white_square_button: white_square_button,
  	black_square_button: black_square_button,
  	checkered_flag: checkered_flag,
  	triangular_flag_on_post: triangular_flag_on_post,
  	crossed_flags: crossed_flags,
  	black_flag: black_flag,
  	white_flag: white_flag,
  	rainbow_flag: rainbow_flag,
  	transgender_flag: transgender_flag,
  	pirate_flag: pirate_flag,
  	ascension_island: ascension_island,
  	andorra: andorra,
  	united_arab_emirates: united_arab_emirates,
  	afghanistan: afghanistan,
  	antigua_barbuda: antigua_barbuda,
  	anguilla: anguilla,
  	albania: albania,
  	armenia: armenia,
  	angola: angola,
  	antarctica: antarctica,
  	argentina: argentina,
  	american_samoa: american_samoa,
  	austria: austria,
  	australia: australia,
  	aruba: aruba,
  	aland_islands: aland_islands,
  	azerbaijan: azerbaijan,
  	bosnia_herzegovina: bosnia_herzegovina,
  	barbados: barbados,
  	bangladesh: bangladesh,
  	belgium: belgium,
  	burkina_faso: burkina_faso,
  	bulgaria: bulgaria,
  	bahrain: bahrain,
  	burundi: burundi,
  	benin: benin,
  	st_barthelemy: st_barthelemy,
  	bermuda: bermuda,
  	brunei: brunei,
  	bolivia: bolivia,
  	caribbean_netherlands: caribbean_netherlands,
  	brazil: brazil,
  	bahamas: bahamas,
  	bhutan: bhutan,
  	bouvet_island: bouvet_island,
  	botswana: botswana,
  	belarus: belarus,
  	belize: belize,
  	canada: canada,
  	cocos_islands: cocos_islands,
  	congo_kinshasa: congo_kinshasa,
  	central_african_republic: central_african_republic,
  	congo_brazzaville: congo_brazzaville,
  	switzerland: switzerland,
  	cote_divoire: cote_divoire,
  	cook_islands: cook_islands,
  	chile: chile,
  	cameroon: cameroon,
  	cn: cn,
  	colombia: colombia,
  	clipperton_island: clipperton_island,
  	costa_rica: costa_rica,
  	cuba: cuba,
  	cape_verde: cape_verde,
  	curacao: curacao,
  	christmas_island: christmas_island,
  	cyprus: cyprus,
  	czech_republic: czech_republic,
  	de: de,
  	diego_garcia: diego_garcia,
  	djibouti: djibouti,
  	denmark: denmark,
  	dominica: dominica,
  	dominican_republic: dominican_republic,
  	algeria: algeria,
  	ceuta_melilla: ceuta_melilla,
  	ecuador: ecuador,
  	estonia: estonia,
  	egypt: egypt,
  	western_sahara: western_sahara,
  	eritrea: eritrea,
  	es: es,
  	ethiopia: ethiopia,
  	eu: eu,
  	european_union: european_union,
  	finland: finland,
  	fiji: fiji,
  	falkland_islands: falkland_islands,
  	micronesia: micronesia,
  	faroe_islands: faroe_islands,
  	fr: fr,
  	gabon: gabon,
  	gb: gb,
  	uk: uk,
  	grenada: grenada,
  	georgia: georgia,
  	french_guiana: french_guiana,
  	guernsey: guernsey,
  	ghana: ghana,
  	gibraltar: gibraltar,
  	greenland: greenland,
  	gambia: gambia,
  	guinea: guinea,
  	guadeloupe: guadeloupe,
  	equatorial_guinea: equatorial_guinea,
  	greece: greece,
  	south_georgia_south_sandwich_islands: south_georgia_south_sandwich_islands,
  	guatemala: guatemala,
  	guam: guam,
  	guinea_bissau: guinea_bissau,
  	guyana: guyana,
  	hong_kong: hong_kong,
  	heard_mcdonald_islands: heard_mcdonald_islands,
  	honduras: honduras,
  	croatia: croatia,
  	haiti: haiti,
  	hungary: hungary,
  	canary_islands: canary_islands,
  	indonesia: indonesia,
  	ireland: ireland,
  	israel: israel,
  	isle_of_man: isle_of_man,
  	india: india,
  	british_indian_ocean_territory: british_indian_ocean_territory,
  	iraq: iraq,
  	iran: iran,
  	iceland: iceland,
  	it: it,
  	jersey: jersey,
  	jamaica: jamaica,
  	jordan: jordan,
  	jp: jp,
  	kenya: kenya,
  	kyrgyzstan: kyrgyzstan,
  	cambodia: cambodia,
  	kiribati: kiribati,
  	comoros: comoros,
  	st_kitts_nevis: st_kitts_nevis,
  	north_korea: north_korea,
  	kr: kr,
  	kuwait: kuwait,
  	cayman_islands: cayman_islands,
  	kazakhstan: kazakhstan,
  	laos: laos,
  	lebanon: lebanon,
  	st_lucia: st_lucia,
  	liechtenstein: liechtenstein,
  	sri_lanka: sri_lanka,
  	liberia: liberia,
  	lesotho: lesotho,
  	lithuania: lithuania,
  	luxembourg: luxembourg,
  	latvia: latvia,
  	libya: libya,
  	morocco: morocco,
  	monaco: monaco,
  	moldova: moldova,
  	montenegro: montenegro,
  	st_martin: st_martin,
  	madagascar: madagascar,
  	marshall_islands: marshall_islands,
  	macedonia: macedonia,
  	mali: mali,
  	myanmar: myanmar,
  	mongolia: mongolia,
  	macau: macau,
  	northern_mariana_islands: northern_mariana_islands,
  	martinique: martinique,
  	mauritania: mauritania,
  	montserrat: montserrat,
  	malta: malta,
  	mauritius: mauritius,
  	maldives: maldives,
  	malawi: malawi,
  	mexico: mexico,
  	malaysia: malaysia,
  	mozambique: mozambique,
  	namibia: namibia,
  	new_caledonia: new_caledonia,
  	niger: niger,
  	norfolk_island: norfolk_island,
  	nigeria: nigeria,
  	nicaragua: nicaragua,
  	netherlands: netherlands,
  	norway: norway,
  	nepal: nepal,
  	nauru: nauru,
  	niue: niue,
  	new_zealand: new_zealand,
  	oman: oman,
  	panama: panama,
  	peru: peru,
  	french_polynesia: french_polynesia,
  	papua_new_guinea: papua_new_guinea,
  	philippines: philippines,
  	pakistan: pakistan,
  	poland: poland,
  	st_pierre_miquelon: st_pierre_miquelon,
  	pitcairn_islands: pitcairn_islands,
  	puerto_rico: puerto_rico,
  	palestinian_territories: palestinian_territories,
  	portugal: portugal,
  	palau: palau,
  	paraguay: paraguay,
  	qatar: qatar,
  	reunion: reunion,
  	romania: romania,
  	serbia: serbia,
  	ru: ru,
  	rwanda: rwanda,
  	saudi_arabia: saudi_arabia,
  	solomon_islands: solomon_islands,
  	seychelles: seychelles,
  	sudan: sudan,
  	sweden: sweden,
  	singapore: singapore,
  	st_helena: st_helena,
  	slovenia: slovenia,
  	svalbard_jan_mayen: svalbard_jan_mayen,
  	slovakia: slovakia,
  	sierra_leone: sierra_leone,
  	san_marino: san_marino,
  	senegal: senegal,
  	somalia: somalia,
  	suriname: suriname,
  	south_sudan: south_sudan,
  	sao_tome_principe: sao_tome_principe,
  	el_salvador: el_salvador,
  	sint_maarten: sint_maarten,
  	syria: syria,
  	swaziland: swaziland,
  	tristan_da_cunha: tristan_da_cunha,
  	turks_caicos_islands: turks_caicos_islands,
  	chad: chad,
  	french_southern_territories: french_southern_territories,
  	togo: togo,
  	thailand: thailand,
  	tajikistan: tajikistan,
  	tokelau: tokelau,
  	timor_leste: timor_leste,
  	turkmenistan: turkmenistan,
  	tunisia: tunisia,
  	tonga: tonga,
  	tr: tr,
  	trinidad_tobago: trinidad_tobago,
  	tuvalu: tuvalu,
  	taiwan: taiwan,
  	tanzania: tanzania,
  	ukraine: ukraine,
  	uganda: uganda,
  	us_outlying_islands: us_outlying_islands,
  	united_nations: united_nations,
  	us: us,
  	uruguay: uruguay,
  	uzbekistan: uzbekistan,
  	vatican_city: vatican_city,
  	st_vincent_grenadines: st_vincent_grenadines,
  	venezuela: venezuela,
  	british_virgin_islands: british_virgin_islands,
  	us_virgin_islands: us_virgin_islands,
  	vietnam: vietnam,
  	vanuatu: vanuatu,
  	wallis_futuna: wallis_futuna,
  	samoa: samoa,
  	kosovo: kosovo,
  	yemen: yemen,
  	mayotte: mayotte,
  	south_africa: south_africa,
  	zambia: zambia,
  	zimbabwe: zimbabwe,
  	england: england,
  	scotland: scotland,
  	wales: wales
  };

  // Emoticons -> Emoji mapping.
  //
  // (!) Some patterns skipped, to avoid collisions
  // without increase matcher complicity. Than can change in future.
  //
  // Places to look for more emoticons info:
  //
  // - http://en.wikipedia.org/wiki/List_of_emoticons#Western
  // - https://github.com/wooorm/emoticon/blob/master/Support.md
  // - http://factoryjoe.com/projects/emoticons/
  //
  var emojies_shortcuts = {
    angry: ['>:(', '>:-('],
    blush: [':")', ':-")'],
    broken_heart: ['</3', '<\\3'],
    // :\ and :-\ not used because of conflict with markdown escaping
    confused: [':/', ':-/'],
    // twemoji shows question
    cry: [":'(", ":'-(", ':,(', ':,-('],
    frowning: [':(', ':-('],
    heart: ['<3'],
    imp: [']:(', ']:-('],
    innocent: ['o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)'],
    joy: [":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D'],
    kissing: [':*', ':-*'],
    laughing: ['x-)', 'X-)'],
    neutral_face: [':|', ':-|'],
    open_mouth: [':o', ':-o', ':O', ':-O'],
    rage: [':@', ':-@'],
    smile: [':D', ':-D'],
    smiley: [':)', ':-)'],
    smiling_imp: [']:)', ']:-)'],
    sob: [":,'(", ":,'-(", ';(', ';-('],
    stuck_out_tongue: [':P', ':-P'],
    sunglasses: ['8-)', 'B-)'],
    sweat: [',:(', ',:-('],
    sweat_smile: [',:)', ',:-)'],
    unamused: [':s', ':-S', ':z', ':-Z', ':$', ':-$'],
    wink: [';)', ';-)']
  };

  function emoji_html(tokens, idx
  /*, options, env */
  ) {
    return tokens[idx].content;
  }

  // Emojies & shortcuts replacement logic.
  //
  // Note: In theory, it could be faster to parse :smile: in inline chain and
  // leave only shortcuts here. But, who care...
  //
  function create_rule(md, emojies, shortcuts, scanRE, replaceRE) {
    let arrayReplaceAt = md.utils.arrayReplaceAt,
        ucm = md.utils.lib.ucmicro,
        ZPCc = new RegExp([ucm.Z.source, ucm.P.source, ucm.Cc.source].join('|'));

    function splitTextToken(text, level, Token) {
      let token,
          last_pos = 0,
          nodes = [];
      text.replace(replaceRE, function (match, offset, src) {
        let emoji_name; // Validate emoji name

        if (shortcuts.hasOwnProperty(match)) {
          // replace shortcut with full name
          emoji_name = shortcuts[match]; // Don't allow letters before any shortcut (as in no ":/" in http://)

          if (offset > 0 && !ZPCc.test(src[offset - 1])) {
            return;
          } // Don't allow letters after any shortcut


          if (offset + match.length < src.length && !ZPCc.test(src[offset + match.length])) {
            return;
          }
        } else {
          emoji_name = match.slice(1, -1);
        } // Add new tokens to pending list


        if (offset > last_pos) {
          token = new Token('text', '', 0);
          token.content = text.slice(last_pos, offset);
          nodes.push(token);
        }

        token = new Token('emoji', '', 0);
        token.markup = emoji_name;
        token.content = emojies[emoji_name];
        nodes.push(token);
        last_pos = offset + match.length;
      });

      if (last_pos < text.length) {
        token = new Token('text', '', 0);
        token.content = text.slice(last_pos);
        nodes.push(token);
      }

      return nodes;
    }

    return function emoji_replace(state) {
      let i,
          j,
          l,
          tokens,
          token,
          blockTokens = state.tokens,
          autolinkLevel = 0;

      for (j = 0, l = blockTokens.length; j < l; j++) {
        if (blockTokens[j].type !== 'inline') {
          continue;
        }

        tokens = blockTokens[j].children; // We scan from the end, to keep position when new tags added.
        // Use reversed logic in links start/end match

        for (i = tokens.length - 1; i >= 0; i--) {
          token = tokens[i];

          if (token.type === 'link_open' || token.type === 'link_close') {
            if (token.info === 'auto') {
              autolinkLevel -= token.nesting;
            }
          }

          if (token.type === 'text' && autolinkLevel === 0 && scanRE.test(token.content)) {
            // replace current node
            blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, splitTextToken(token.content, token.level, state.Token));
          }
        }
      }
    };
  }

  // Convert input options to more useable format
  // and compile search regexp
  function quoteRE(str) {
    return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
  }

  function normalize_opts(options) {
    let emojies = options.defs,
        shortcuts; // Filter emojies by whitelist, if needed

    if (options.enabled.length) {
      emojies = Object.keys(emojies).reduce(function (acc, key) {
        if (options.enabled.indexOf(key) >= 0) {
          acc[key] = emojies[key];
        }

        return acc;
      }, {});
    } // Flatten shortcuts to simple object: { alias: emoji_name }


    shortcuts = Object.keys(options.shortcuts).reduce(function (acc, key) {
      // Skip aliases for filtered emojies, to reduce regexp
      if (!emojies[key]) {
        return acc;
      }

      if (Array.isArray(options.shortcuts[key])) {
        options.shortcuts[key].forEach(function (alias) {
          acc[alias] = key;
        });
        return acc;
      }

      acc[options.shortcuts[key]] = key;
      return acc;
    }, {}); // Compile regexp

    let names = Object.keys(emojies).map(function (name) {
      return ':' + name + ':';
    }).concat(Object.keys(shortcuts)).sort().reverse().map(function (name) {
      return quoteRE(name);
    }).join('|');
    let scanRE = RegExp(names);
    let replaceRE = RegExp(names, 'g');
    return {
      defs: emojies,
      shortcuts: shortcuts,
      scanRE: scanRE,
      replaceRE: replaceRE
    };
  }

  function emoji_plugin(md, options) {
    let defaults = {
      defs: emojies_defs,
      shortcuts: emojies_shortcuts,
      enabled: []
    };
    let opts = normalize_opts(md.utils.assign({}, defaults, options || {}));
    md.renderer.rules.emoji = emoji_html;
    md.core.ruler.push('emoji', create_rule(md, opts.defs, opts.shortcuts, opts.scanRE, opts.replaceRE));
  }

  return emoji_plugin;

})));
//# sourceMappingURL=markdownItEmoji.umd.js.map
