import React from "react";
import PropType from "prop-types";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const DevCard = ({
  name,
  position,
  image,
  description,
  github,
  linkedin,
  twitter,
}) => {
  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-full h-56 object-contain object-center mb-4"
          src={image}
        />
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {name}
          </h2>
          <h3 className="text-gray-500 mb-3">{position}</h3>
          <p className="mb-4">{description}</p>
          <span className="inline-flex space-x-4">
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <FiGithub className="w-8 h-8 text-gray-500" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin className="w-8 h-8 text-gray-500" />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noreferrer">
                <FiTwitter className="w-8 h-8 text-gray-500" />
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

DevCard.propTypes = {
  name: PropType.string.isRequired,
  position: PropType.string.isRequired,
  image: PropType.string.isRequired,
  description: PropType.string,
  github: PropType.string,
  linkedin: PropType.string,
  twitter: PropType.string,
};

export default DevCard;
