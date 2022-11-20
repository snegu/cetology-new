import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Whale from "../components/sections/whale"
import Divider from '../components/sections/Divider'
import HeroSection from '../components/sections/HeroSection'
import Footer from '../components/sections/Footer'

function IndexPage() {
  return (
<Layout>
    <SEO title="Cetology" />
     
     <HeroSection />

      <div className="WhaleList">

          <h2>I. Folio</h2>

          <div className="FolioGroup">
          
              <Whale title="Sperm Whale"
              description="All his peculiarities will, in many other places, be enlarged upon. It is chiefly with his name that I now have to do. Philologically considered, it is absurd."
              image={require('../img/sperm-whale.png')}
              longdescription1="This whale, among the English of old vaguely known as the Trumpa whale and the Physeter whale, and the Anvil Headed whale, is the present Cachalot of the French, and the Pottsfich of the Germans, and the Macrocephalus of the Long Words. He is, without doubt, the largest inhabitant of the globe; the most formidable of all whales to encounter; the most majestic in aspect; and lastly, by far the most valuable in commerce; he being the only creature from which that valuable substance, spermaceti, is obtained. All his peculiarities will, in many other places, be enlarged upon. It is chiefly with his name that I now have to do. Philologically considered, it is absurd. Some centuries ago, when the sperm whale was almost wholly unknown in his own proper individuality, and when his oil was only accidentally obtained from the stranded fish; in those days spermaceti, it would seem, was popularly supposed to be derived from a creature identical with the one then known in England as the Greenland or Right Whale. It was the idea also, that this same spermaceti was that quickening humor of the Greenland Whale which the first syllable of the word literally expresses. In those times, also, spermaceti was exceedingly scarce, not being used for light, but only as an ointment and medicament. It was only to be had from the druggists as you nowadays buy an ounce of rhubarb. When, as I opine, in the course of time, the true nature of spermaceti became known, its original name was still retained by the dealers; no doubt to enhance its value by a notion so strangely significant of its scarcity. And so the appellation must at last have come to be bestowed upon the whale from which this spermaceti was really derived."
                species={<a href="https://en.wikipedia.org/wiki/Sperm_whale" target="blank">Sperm whale</a>}
              /> 
              <Whale title="Right Whale"
              description="In one respect this is the most venerable of the leviathans, being the one first regularly hunted by man."
              image={require('../img/right-whale.png')}
              longdescription1="In one respect this is the most venerable of the leviathans, being the one first regularly hunted by man. It yields the article commonly known as whalebone or baleen; and the oil specially known as “whale oil,” an inferior article in commerce. Among the fishermen, he is indiscriminately designated by all the following titles: The Whale; the Greenland Whale; the Black Whale; the Great Whale; the True Whale; the Right Whale. There is a deal of obscurity concerning the Identity of the species thus multitudinously baptized. What then is the whale, which I include in the second species of my Folios? It is the Great Mysticetus of the English naturalists; the Greenland Whale of the English whaleman; the Baliene Ordinaire of the French whalemen; the Growlands Walfish of the Swedes. It is the whale which for more than two centuries past has been hunted by the Dutch and English in the Arctic seas; it is the whale which the American fishermen have long pursued in the Indian ocean, on the Brazil Banks, on the Nor’ West Coast, and various other parts of the world, designated by them Right Whale Cruising Grounds."
              longdescription2="Some pretend to see a difference between the Greenland whale of the English and the right whale of the Americans. But they precisely agree in all their grand features; nor has there yet been presented a single determinate fact upon which to ground a radical distinction. It is by endless subdivisions based upon the most inconclusive differences, that some departments of natural history become so repellingly intricate. The right whale will be elsewhere treated of at some length, with reference to elucidating the sperm whale."
              species={<a href="https://en.wikipedia.org/wiki/Right_whale" target="blank">Right whale</a>}
              /> 
              <Whale title="Fin-Back"
              description="The Fin-Back is not gregarious. He seems a whale-hater, as some men are man-haters."
              image={require('../img/fin-back.png')}
              longdescription1="Under this head I reckon a monster which, by the various names of Fin-Back, Tall-Spout, and Long-John, has been seen almost in every sea and is commonly the whale whose distant jet is so often descried by passengers crossing the Atlantic, in the New York packet-tracks. In the length he attains, and in his baleen, the Fin-back resembles the right whale, but is of a less portly girth, and a lighter color, approaching to olive. His great lips present a cable-like aspect, formed by the intertwisting, slanting folds of large wrinkles. His grand distinguishing feature, the fin, from which he derives his name, is often a conspicuous object. This fin is some three or four feet long, growing vertically from the hinder part of the back, of an angular shape, and with a very sharp pointed end. Even if not the slightest other part of the creature be visible, this isolated fin will, at times, be seen plainly projecting from the surface. When the sea is moderately calm, and slightly marked with spherical ripples, and this gnomon-like fin stands up and casts shadows upon the wrinkled surface, it may well be supposed that the watery circle surrounding it somewhat resembles a dial, with its style and wavy hour-lines graved on it. On that Ahaz-dial the shadow often goes back. The Fin-Back is not gregarious. He seems a whale-hater, as some men are man-haters. Very shy; always going solitary; unexpectedly rising to the surface in the remotest and most sullen waters; his straight and single lofty jet rising like a tall misanthropic spear upon a barren plain; gifted with such wondrous power and velocity in swimming, as to defy all present pursuit from man; this leviathan seems the banished and unconquerable Cain of his race, bearing for his mark that style upon his back. From having the baleen in his mouth, the Fin-Back is sometimes included with the right whale, among a theoretic species denominated Whalebone whales, that is, whales with baleen. Of these so-called Whalebone whales, there would seem to be several varieties, most of which, however, are little known. Broad-nosed whales and beaked whales; pike-headed whales; bunched whales; under-jawed whales and rostrated whales, are the fisherman’s names for a few sorts."
              longdescription2="In connexion with this appellative of “Whalebone whales,” it is of great importance to mention, that however such a nomenclature may be convenient in facilitating allusions to some kind of whales, yet it is in vain to attempt a clear classification of the Leviathan, founded upon either his baleen, or hump, or fin, or teeth; notwithstanding that those marked parts or features very obviously seem better adapted to afford the basis for a regular system of Cetology than any other detached bodily distinctions, which the whale, in his kinds, presents. How then? The baleen, hump, back-fin, and teeth; these are things whose peculiarities are indiscriminately dispersed among all sorts of whales, without any record to what may be the nature of their structure in other and more essential particulars. Thus, the sperm whale and the humpbacked whale, each has a hump; but there the similitude ceases. Then this same humpbacked whale and the Greenland whale, each of these has baleen; but there again the similitude ceases. And it is just the same with the other parts above mentioned. In various sorts of whales, they form such irregular combinations; or, in the case of any one of them detached, such an irregular isolation; as utterly to defy all general methodization formed upon such a basis. On this rock every one of the whale-naturalists has split."
              longdescription3="But it may possibly be conceived that, in the internal parts of the whale, in his anatomy- there, at least, we shall be able to hit the right classification. Nay; what thing, for example, is there in the Greenland whale’s anatomy more striking than his baleen? Yet we have seen that by his baleen it is impossible correctly to classify the Greenland whale. And if you descend into the bowels of the various leviathans, why there you will not find distinctions a fiftieth part as available to the systematizer as those external ones already enumerated. What then remains? nothing but to take hold of the whales bodily, in their entire liberal volume, and boldly sort them that way. And this is the Bibliographical system here adopted; and it is the only one that can possibly succeed, for it alone is practicable."
              species={<a href="https://en.wikipedia.org/wiki/Fin_whale" target="blank">Fin whale</a>}
              /> 
              <Whale title="Hump Back"
              description="He is the most gamesome and light-hearted of all the whales, making more gay foam and white water generally than any other of them."
              image={require('../img/humpback.png')}
              longdescription1="This whale is often seen on the northern American coast. He has been frequently captured there, and towed into harbor. He has a great pack on him like a peddler; or you might call him the Elephant and Castle whale. At any rate, the popular name for him does not sufficiently distinguish him, since the sperm whale also has a hump though a smaller one. His oil is not very valuable. He has baleen. He is the most gamesome and light-hearted of all the whales, making more gay foam and white water generally than any other of them."
              species={<a href="https://en.wikipedia.org/wiki/Humpback_whale" target="blank">Humpback whale</a>}
              /> 
              <Whale title="Razar Back"
              description="Of a retiring nature, he eludes both hunters and philosophers. Let him go. I know little more of him, nor does anybody else."
              image={require('../img/fin-back.png')}
              longdescription1="Of this whale little is known but his name. I have seen him at a distance off Cape Horn. Of a retiring nature, he eludes both hunters and philosophers. Though no coward, he has never yet shown any part of him but his back, which rises in a long sharp ridge. Let him go. I know little more of him, nor does anybody else."
              species={<a href="https://en.wikipedia.org/wiki/Fin_whale" target="blank">Fin whale</a>}
              /> 
              <Whale title="Sulphur Bottom"
              description="Another retiring gentleman, with a brimstone belly, doubtless got by scraping along the Tart arian tiles in some of his profounder divings."
              image={require('../img/blue-whale.png')}
              longdescription1="Another retiring gentleman, with a brimstone belly, doubtless got by scraping along the Tartarian tiles in some of his profounder divings. He is seldom seen; at least I have never seen him except in the remoter southern seas, and then always at too great a distance to study his countenance. He is never chased; he would run away with rope-walks of line. Prodigies are told of him. Adieu, Sulphur Bottom! I can say nothing more that is true of ye, nor can the oldest Nantucketer."
              species={<a href="https://en.wikipedia.org/wiki/Blue_whale" target="blank">Blue whale</a>}

              /> 
          
          </div>

          <Divider />
         
          <h2>II. Octavo</h2>
          <div className="OctavoGroup">
      
              <Whale title="Grampus"
              description="Though this fish, whose loud sonorous breathing, or rather blowing, has furnished a proverb to landsmen, is so well known a denizen of the deep, yet is he not popularly classed among whales."
              image={require('../img/killer-whale.png')}
              longdescription1="Though this fish, whose loud sonorous breathing, or rather blowing, has furnished a proverb to landsmen, is so well known a denizen of the deep, yet is he not popularly classed among whales. But possessing all the grand distinctive features of the leviathan, most naturalists have recognised him for one. He is of moderate octave size, varying from fifteen to twenty-five feet in length, and of corresponding dimensions round the waist. He swims in herds; he is never regularly hunted, though his oil is considerable in quantity, and pretty good for light. By some fishermen his approach is regarded as premonitory of the advance of the great sperm whale."
              species={<a href="https://en.wikipedia.org/wiki/Killer_whale" target="blank">Killer whale (Orca)</a>}
              /> 
              <Whale title="Black Fish"
              description="His voracity is well known and from the circumstance that the inner angles of his lips are curved upwards, he carries an everlasting Mephistophelean grin on his face."
              image={require('../img/pilot-whale.png')}
              longdescription1="I give the popular fishermen’s names for all these fish, for generally they are the best. Where any name happens to be vague or inexpressive, I shall say so, and suggest another. I do so now touching the Black Fish, so called because blackness is the rule among almost all whales. So, call him the Hyena Whale, if you please. His voracity is well known and from the circumstance that the inner angles of his lips are curved upwards, he carries an everlasting Mephistophelean grin on his face. This whale averages some sixteen or eighteen feet in length. He is found in almost all latitudes. He has a peculiar way of showing his dorsal hooked fin in swimming, which looks something like a Roman nose. When not more profitably employed, the sperm whale hunters sometimes capture the Hyena whale, to keep up the supply of cheap oil for domestic employment- as some frugal housekeepers, in the absence of company, and quite alone by themselves, burn unsavory tallow instead of odorous wax. Though their blubber is very thin, some of these whales will yield you upwards of thirty gallons of oil."
              species={<a href="https://en.wikipedia.org/wiki/Pilot_whale" target="blank">Pilot whale</a>}
              /> 
              <Whale title="Narwhale"
              description="My own opinion is, that however this one-sided horn may really be used by the Narwhale, it would certainly be very convenient to him for a folder in reading pamphlets."
              image={require('../img/narwhal.png')}
              longdescription1="Another instance of a curiously named whale, so named I suppose from his peculiar horn being originally mistaken for a peaked nose. The creature is some sixteen feet in length, while its horn averages five feet, though some exceed ten, and even attain to fifteen feet. Strictly speaking, this horn is but a lengthened tusk, growing out from the jaw in a line a little depressed from the horizontal. But it is only found on the sinister side, which has an ill effect, giving its owner something analogous to the aspect of a clumsy left-handed man. What precise purpose this ivory horn or lance answers, it would be hard to say. It does not seem to be used like the blade of the sword-fish and bill-fish; though some sailors tell me that the Narwhale employs it for a rake in turning over the bottom of the sea for food. Charley Coffin said it was used for an ice-piercer; for the Narwhale, rising to the surface of the Polar Sea, and finding it sheeted with ice, thrusts his horn up, and so breaks through. But you cannot prove either of these surmises to be correct. My own opinion is, that however this one-sided horn may really be used by the Narwhale- however that may be- it would certainly be very convenient to him for a folder in reading pamphlets. The Narwhale I have heard called the Tusked whale, the Horned whale, and the Unicorn whale. He is certainly a curious example of the Unicornism to be found in almost every kingdom of animated nature. From certain cloistered old authors I have gathered that this same sea-unicorn’s horn was in ancient days regarded as the great antidote against poison, and as such, preparations of it brought immense prices. It was also distilled to a volatile salts for fainting ladies the same way that the horns of the male deer are manufactured into hartshorn. Originally it was in itself accounted an object of great curiosity. Black Letter tells me that Sir Martin Frobisher on his return from that voyage, when Queen Bess did gallantly wave her jewelled hand to him from a window of Greenwich Palace, as his bold ship sailed down the Thames; “when Sir Martin returned from that voyage,” saith Black Letter, “on bended knees he presented to her highness a prodigious long horn of the Narwhale, which for a long period after hung in the castle at Windsor.” An Irish author avers that the Earl of Leicester, on bended knees, did likewise present to her highness another horn, pertaining to a land beast of the unicorn nature."
              longdescription2="The Narwhale has a very picturesque, leopard-like look, being of a milk-white ground color, dotted with round and oblong spots of black. His oil is very superior, clear and fine; but there is little of it, and he is seldom hunted. He is mostly found in the circumpolar seas."
              species={<a href="https://en.wikipedia.org/wiki/Narwhal" target="blank">Narwhal</a>}
              /> 
              <Whale title="Killer"
              description="Exception might be taken to the name bestowed upon this whale, on the ground of its indistinctness. For we are all killers, on land and on sea; Bonapartes and Sharks included."
              image={require('../img/killer-whale.png')}
              longdescription1="Of this whale little is precisely known to the Nantucketer, and nothing at all to the professed naturalists. From what I have seen of him at a distance, I should say that he was about the bigness of a grampus. He is very savage- a sort of Feegee fish. He sometimes takes the great Folio whales by the lip, and hangs there like a leech, till the mighty brute is worried to death. The Killer is never hunted. I never heard what sort of oil he has. Exception might be taken to the name bestowed upon this whale, on the ground of its indistinctness. For we are all killers, on land and on sea; Bonapartes and Sharks included."
              species={<a href="https://en.wikipedia.org/wiki/Killer_whale" target="blank">Killer whale (Orca)</a>}
              /> 
              <Whale title="Thrasher"
              description="Still less is known of the Thrasher than of the Killer. Both are outlaws, even in the lawless seas."
              image={require('../img/killer-whale.png')}
              longdescription1="This gentleman is famous for his tail which he uses for a ferule in thrashing his foes. He mounts the Folio whale’s back, and as he swims, he works his passage by flogging him; as some schoolmasters get along in the world by a similar process. Still less is known of the Thrasher than of the Killer. Both are outlaws, even in the lawless seas."
              species={<a href="https://en.wikipedia.org/wiki/Killer_whale" target="blank">Killer whale (Orca)</a>}
              /> 
          
          </div>

          <Divider />
         
          <h2>III. Duodecimo</h2>
          <div className="DuoGroup">
      
              <Whale title="Huzza Porpoise"
              description="If you yourself can withstand three cheers at beholding these vivacious fish, then heaven help ye; the spirit of godly gamesomeness is not in ye."
              image={require('../img/dolphin-bottlenose.png')}
              longdescription1="This is the common porpoise found all over the globe. The name is of my own bestowal; for there are more than one sort of porpoises, and something must be done to distinguish them. I call him thus, because he always swims in hilarious shoals, which upon the broad sea keep tossing themselves to heaven like caps in a Fourth-of-July crowd. Their appearance is generally hailed with delight by the mariner. Full of fine spirits, they invariably come from the breezy billows to windward. They are the lads that always live before the wind. They are accounted a lucky omen. If you yourself can withstand three cheers at beholding these vivacious fish, then heaven help ye; the spirit of godly gamesomeness is not in ye. A well-fed, plump Huzza Porpoise will yield you one good gallon of good oil. But the fine and delicate fluid extracted from his jaws is exceedingly valuable. It is in request among jewellers and watchmakers. Sailors put in on their hones. Porpoise meat is good eating, you know. It may never have occurred to you that a porpoise spouts. Indeed, his spout is so small that it is not very readily discernible. But the next time you have a chance, watch him; and you will then see the great Sperm whale himself in miniature."
              species={<a href="https://en.wikipedia.org/wiki/Bottlenose_dolphin" target="blank">Bottlenose dolphin</a>}
              /> 
              <Whale title="Algerine Porpoise"
              description="A pirate. Very savage."
              image={require('../img/pygmy-killer-whale.png')}
              longdescription1="A pirate. Very savage. He is only found, I think, in the Pacific. He is somewhat larger than the Huzza Porpoise, but much of the same general make. Provoke him, and he will buckle to a shark. I have lowered for him many times, but never yet saw him captured."
              species={<a href="https://en.wikipedia.org/wiki/Pygmy_killer_whale" target="blank">Pygmy killer whale</a>}
              /> 
              <Whale title="Mealy-Mouthed Porpoise"
              description="The white comprises part of his head, and the whole of his mouth, which makes him look as if he had just escaped from a felonious visit to a meal-bag."
              image={require('../img/mealy-mouthed-porpoise.png')}
              longdescription1="The largest kind of Porpoise; and only found in the Pacific, so far as it is known. The only English name, by which he has hitherto been designated, is that of the fisher- Right-Whale Porpoise, from the circumstance that he is chiefly found in the vicinity of that Folio. In shape, he differs in some degree from the Huzza Porpoise, being of a less rotund and jolly girth; indeed, he is of quite a neat and gentleman-like figure. He has no fins on his back (most other porpoises have), he has a lovely tail, and sentimental Indian eyes of a hazel hue. But his mealy-mouth spoils him. Though his entire back down to his side fins is of a deep sable, yet a boundary line, distinct as the mark in a ship’s hull, called the “bright waist,” that line streaks him from stem to stern, with two separate colors, black above and white below. The white comprises part of his head, and the whole of his mouth, which makes him look as if he had just escaped from a felonious visit to a meal-bag. A most mean and mealy aspect! His oil is much like that of the common porpoise."
              species={<a href="https://en.wikipedia.org/wiki/Southern_right_whale_dolphin" target="blank">Southern right whale dolphin</a>}
              /> 
          </div>
    
      </div>

    <Footer />

</Layout>
  )
}

export default IndexPage
