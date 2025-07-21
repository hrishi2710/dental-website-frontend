import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = ({ socialLinks }) => (
  <div className="flex flex-row space-x-4 mt-2">
    {socialLinks.map((s) => (
      <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
        <span className="bg-[#a2501c] hover:bg-[#7c3f18] text-white rounded-full w-8 h-8 flex items-center justify-center text-base transition-colors">
          <FontAwesomeIcon icon={s.icon} />
        </span>
      </a>
    ))}
  </div>
);

export default SocialIcons; 