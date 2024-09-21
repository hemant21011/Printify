import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#2f2e0c] text-white py-10 ">
      <div className="container mx-auto px-4 cursor-pointer">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex-shrink-0 text-4xl font-extrabold text-center md:text-left">Printify</div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {['facebook', 'instagram', 'linkedin', 'twitter', 'youtube', 'tiktok', 'reddit'].map((platform) => (
              <a
                key={platform}
                href={`https://${platform}.com`}
                className="text-white text-xl hover:text-lime-400 transition"
              >
                <i className={`fab fa-${platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Content: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          {/* Column 1 - Integrations */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Integrations</h2>
            <ul className="space-y-2">
              {['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Printify API'].map(item => (
                <li key={item} className="hover:text-lime-400 transition">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Discover */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Discover</h2>
            <ul className="space-y-2">
              {['Blog', 'Guides', 'Products', 'Etsy print-on-demand', 'Shopify print-on-demand', 'WooCommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand', 'Make Your Own Shirt', 'Brands', 'Pricing'].map(item => (
                <li key={item} className="hover:text-lime-400 transition">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Start Selling */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Start Selling</h2>
            <ul className="space-y-2">
              {['Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products', 'Custom All-Over-Print Hoodies'].map(item => (
                <li key={item} className="hover:text-lime-400 transition">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Printify */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Printify</h2>
            <ul className="space-y-2">
              {['Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery', 'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Us'].map(item => (
                <li key={item} className="hover:text-lime-400 transition">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Responsive Adjustment */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Printify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
