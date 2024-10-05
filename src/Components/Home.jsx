import React from "react";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Home = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <div className="bg-black text-white text-center py-16">
        <img src="images/swagger.jpg" alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
        <h1 className="text-4xl font-bold">
          Hɪ, Iᴛ's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Gᴀᴜᴛᴀᴍ Nᴀᴜɢᴀɪ</span>
          <br /> ɪ'ᴍ <br />
          <span style={{ color: "skyBlue", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Fʀᴏɴᴛᴇɴᴅ Dᴇᴠᴇʟᴏᴘᴇʀ",
                "Bᴀᴄᴋᴇɴᴅ Dᴇᴠᴇʟᴏᴘᴇʀ",
                "Sᴏғᴛᴡᴀʀᴇ Dᴇᴠᴇʟᴏᴘᴇʀ",
                "Pʀᴏʙʟᴇᴍ Sᴏʟᴠᴇʀ",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              cursorColor="purple"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">I'ᴍ ᴘᴀssɪᴏɴᴀᴛᴇ ɪɴ ᴍᴏᴅᴇʀɴ ᴡᴇʙ ᴀᴘᴘʟɪᴄᴀᴛɪᴏɴ ᴀs ᴡᴇʟʟ ᴀs ᴀɴɪᴍᴀᴛɪᴏɴs</p>
        <div className="mt-8 space-x-4">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            <Link to="/contactUs">Hɪʀᴇ Mᴇ</Link></button>
          <button className="bg-gradient-to-r from-blue-600 to-slate-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          <Link to="">Mʏ Rᴇsᴜᴍᴇ</Link></button>
        </div>
      </div>
    </>
  );
};

export default Home;
