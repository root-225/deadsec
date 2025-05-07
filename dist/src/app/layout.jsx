"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
var google_1 = require("next/font/google");
var Providers_1 = require("@/components/Providers");
var Header_1 = __importDefault(require("@/components/Header")); // Ajout de l'importation
var Footer_1 = __importDefault(require("@/components/Footer")); // Ajout de l'importation
var inter = (0, google_1.Inter)({ subsets: ['latin'] });
exports.metadata = {
    metadataBase: new URL('https://deadsec.com'),
    title: 'deadsec - Solutions Innovantes Informatiques',
    description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
    keywords: ['technology', 'innovation', 'business solutions', 'digital transformation'],
    openGraph: {
        title: 'deadsec - Solutions Innovantes Informatiques',
        description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
        images: ['/og-image.png']
    },
    twitter: {
        card: 'summary_large_image',
        title: 'deadsec - Solutions Innovantes Informatiques',
        description: 'Developpe ton business en la digitalisant et en investissant dans sa securite en ligne.',
        images: ['/og-image.png']
    }
};
function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </head>
      <body className={"".concat(inter.className, " bg-[#000000] text-[#FFFFFF] transition-colors duration-200")}>
        <Providers_1.Providers>
          <Header_1.default /> {/* Ajout du Header */}
          <main className="antialiased bg-[#000000] text-[#FFFFFF] min-h-screen">
            {children}
          </main>
          <Footer_1.default /> {/* Ajout du Footer */}
        </Providers_1.Providers>
      </body>
    </html>);
}
