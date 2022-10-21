import { contentLinks } from 'data/contentLinks';
import { menuLinks } from 'data/menuLinks';
import { popularLinks } from 'data/popularLinks';
import { capitalizeFirstLetter } from 'shared/capitalizeFirstLetter';
import './style.css';

export const App = () => (
  <div className="h-full overflow-auto">
    <div className="justify-items-center grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))]">
      {[...popularLinks, ...contentLinks, ...menuLinks].map((link) => (
        <a
          key={link.url}
          className="no-underline block m-[40px] text-center cursor-pointer link"
          href={`https://${link.url}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {link.logo && (
            <div className="w-[80px] h-[80px] mt-0 mb-[12px] ml-auto mr-auto rounded-full bg-top bg-no-repeat bg-cover">
              <img src={`/icons/${link.logo}.png`} alt={link.title} width={80} height={80} className="rounded-full" />
            </div>
          )}

          {!link.logo && (
            <div className="bg-white w-[80px] h-[80px] mt-0 mb-[12px] ml-auto mr-auto rounded-full text-[30px] leading-[80px]">
              {capitalizeFirstLetter(link.title)}
            </div>
          )}

          <span className="text-white text-base truncate block w-[160px] label">{link.title}</span>
        </a>
      ))}
    </div>
  </div>
);
