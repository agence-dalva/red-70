"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  src: string;
  span?: string;
};

const categories = [
  "Tout",
  "Isolation",
  "Cloisonnement et plafond",
  "Revêtement sol et mur",
  "Plomberie",
  "Domotique",
  "Montage et pose",
  "Accessibilité PMR",
  "Divers",
  "Rénovation complète",
  "Collectivités et ERP",
];

const ISO  = "/Photos/Isolation/";
const CLOI = "/Photos/Cloisonnement%20et%20plafond/";
const REVE = "/Photos/Rev%C3%AAtement%20sol%20et%20mur/";
const PLOM = "/Photos/Plomberie/";
const DOMO = "/Photos/Domotique/";
const MONT = "/Photos/Montage%20et%20pose/";
const PMR  = "/Photos/Accessibilit%C3%A9%20PMR/";
const DIV  = "/Photos/Divers/";
const RENO = "/Photos/R%C3%A9novation%20compl%C3%A8te/";
const COLL = "/Photos/Collectivit%C3%A9s%20et%20ERP/";

const galleryItems: GalleryItem[] = [
  // ── ISOLATION ──────────────────────────────────────────────────────────
  { id: 1,  title: "Isolation de plafond",          category: "Isolation", src: `${ISO}03.jpg`, span: "col-span-2 row-span-2" },
  { id: 2,  title: "Laine de verre sous plafond",   category: "Isolation", src: `${ISO}IMG_20180719_100642.jpg` },
  { id: 3,  title: "Isolation laine de verre",      category: "Isolation", src: `${ISO}IMG_20180719_100709.jpg` },
  { id: 4,  title: "Isolation laine de verre",      category: "Isolation", src: `${ISO}IMG_20180719_100725.jpg` },

  // ── CLOISONNEMENT ET PLAFOND ───────────────────────────────────────────
  { id: 5,  title: "Ossature plafond suspendu",     category: "Cloisonnement et plafond", src: `${CLOI}AYNANAS%20av0.jpg`, span: "col-span-2 row-span-2" },
  { id: 6,  title: "Pose de BA13",                  category: "Cloisonnement et plafond", src: `${CLOI}AYNANS%20av1.jpg` },
  { id: 7,  title: "Cloisonnement en cours",        category: "Cloisonnement et plafond", src: `${CLOI}AYNANS%20av3.jpg` },
  { id: 8,  title: "Cloisonnement en cours",        category: "Cloisonnement et plafond", src: `${CLOI}AYNANS%20av4.jpg` },
  { id: 9,  title: "Cloisonnement en cours",        category: "Cloisonnement et plafond", src: `${CLOI}AYNANS%20av5.jpg` },
  { id: 10, title: "Faux plafond cuisine spots",    category: "Cloisonnement et plafond", src: `${CLOI}IMG_20180809_163204.jpg` },
  { id: 11, title: "Plafond suspendu LED",          category: "Cloisonnement et plafond", src: `${CLOI}IMG_20180809_163541.jpg` },
  { id: 12, title: "Chantier soirée",               category: "Cloisonnement et plafond", src: `${CLOI}IMG_20180810_195053.jpg` },
  { id: 13, title: "BA13 isolation sous rampant",   category: "Cloisonnement et plafond", src: `${CLOI}IMG_20180830_183722.jpg` },
  { id: 14, title: "Cloison combles aménagés",      category: "Cloisonnement et plafond", src: `${CLOI}IMG_20180830_183743.jpg` },
  { id: 15, title: "Cloisonnement combles",         category: "Cloisonnement et plafond", src: `${CLOI}IMG_20180830_183809.jpg` },
  { id: 16, title: "Faux plafond après travaux",    category: "Cloisonnement et plafond", src: `${CLOI}FP%20apr%C3%A8s.jpg` },
  { id: 17, title: "Faux plafond avant travaux",    category: "Cloisonnement et plafond", src: `${CLOI}FP%20avant.jpg` },
  { id: 18, title: "Cloisonnement chantier",        category: "Cloisonnement et plafond", src: `${CLOI}NIWL5997.JPG` },

  // ── REVÊTEMENT SOL ET MUR ─────────────────────────────────────────────
  { id: 20, title: "Salle de bain terminée",        category: "Revêtement sol et mur", src: `${REVE}AAapres.jpg`, span: "col-span-2 row-span-2" },
  { id: 21, title: "Salle de bain avant travaux",   category: "Revêtement sol et mur", src: `${REVE}AAavant.jpg` },
  { id: 22, title: "Carrelage mural",               category: "Revêtement sol et mur", src: `${REVE}AAmur.jpg` },
  { id: 23, title: "Pose carrelage en cours",       category: "Revêtement sol et mur", src: `${REVE}AApendant.jpg` },
  { id: 24, title: "Carrelage en progression",      category: "Revêtement sol et mur", src: `${REVE}AApendant2.jpg` },
  { id: 25, title: "WC suspendu carrelé",           category: "Revêtement sol et mur", src: `${REVE}2013-03-08%2011.52.17.jpg` },
  { id: 26, title: "Pose faïence salle de bain",    category: "Revêtement sol et mur", src: `${REVE}2013-03-11%2017.10.49.jpg` },
  { id: 27, title: "Revêtement mural faïence",      category: "Revêtement sol et mur", src: `${REVE}2013-03-12%2018.41.51.jpg` },
  { id: 28, title: "Finition carrelage",            category: "Revêtement sol et mur", src: `${REVE}2013-03-20%2016.18.49.jpg` },
  { id: 29, title: "Receveur douche en cours",      category: "Revêtement sol et mur", src: `${REVE}IMG_20190705_085308.jpg` },
  { id: 30, title: "Sèche-serviette sur faïence",   category: "Revêtement sol et mur", src: `${REVE}IMG_20191016_142524.jpg` },
  { id: 31, title: "Radiateur salle de bain",       category: "Revêtement sol et mur", src: `${REVE}IMG_20191016_142535.jpg` },
  { id: 32, title: "Sol vinyle imitation bois",     category: "Revêtement sol et mur", src: `${REVE}IMG_20180831_114915.jpg` },
  { id: 33, title: "Salle de bain noir et blanc",   category: "Revêtement sol et mur", src: `${REVE}j%C3%A91.jpg` },
  { id: 34, title: "Baignoire et faïence",          category: "Revêtement sol et mur", src: `${REVE}j%C3%A92.jpg` },
  { id: 35, title: "Niches carrelées douche",       category: "Revêtement sol et mur", src: `${REVE}Tribout%2005.jpg` },
  { id: 36, title: "Salle de bain Lantenot",        category: "Revêtement sol et mur", src: `${REVE}LEsdb%20lantenot%20apr%C3%A8s.JPG` },
  { id: 37, title: "SDB avec poutres apparentes",   category: "Revêtement sol et mur", src: `${REVE}IMG_20170217_102113.jpg` },
  { id: 38, title: "Rénovation grange",             category: "Revêtement sol et mur", src: `${REVE}IMG_20170217_102220.jpg` },
  { id: 39, title: "Chambre aménagée grange",       category: "Revêtement sol et mur", src: `${REVE}IMG_20170217_102254.jpg` },
  { id: 40, title: "Chambre sous toit rénovée",     category: "Revêtement sol et mur", src: `${REVE}IMG_20180921_172701.jpg` },
  { id: 41, title: "Combles aménagés finition",     category: "Revêtement sol et mur", src: `${REVE}IMG_20180921_172713.jpg` },
  { id: 42, title: "Carrelage réalisation",         category: "Revêtement sol et mur", src: `${REVE}ADDN6837.JPG` },
  { id: 43, title: "Revêtement sol",                category: "Revêtement sol et mur", src: `${REVE}IHYD6153.JPG` },
  { id: 44, title: "Carrelage mural",               category: "Revêtement sol et mur", src: `${REVE}LZXB6750.JPG` },
  { id: 45, title: "Revêtement mur",                category: "Revêtement sol et mur", src: `${REVE}TFGX8099.JPG` },
  { id: 46, title: "Carrelage salle de bain",       category: "Revêtement sol et mur", src: `${REVE}TIFS7339.JPG` },
  { id: 47, title: "Revêtement sol",                category: "Revêtement sol et mur", src: `${REVE}UUOC2204.JPG` },
  { id: 48, title: "Escalier rénovation",           category: "Revêtement sol et mur", src: `${REVE}escalier_orig.jpg` },
  { id: 49, title: "Photo de chantier",             category: "Revêtement sol et mur", src: `${REVE}IMG_1210.jpg` },

  // ── PLOMBERIE ──────────────────────────────────────────────────────────
  { id: 50, title: "Installation WC cuivre",        category: "Plomberie", src: `${PLOM}PVC.jpg`, span: "col-span-2" },
  { id: 51, title: "Réseau plomberie",              category: "Plomberie", src: `${PLOM}Plomberie%201.jpg` },
  { id: 52, title: "Plomberie sous plancher",       category: "Plomberie", src: `${PLOM}Plomberie%202.jpg` },
  { id: 53, title: "Collecteur eau multi-points",   category: "Plomberie", src: `${PLOM}IMG_20201104_123703.jpg` },

  // ── DOMOTIQUE ──────────────────────────────────────────────────────────
  { id: 55, title: "Portail motorisé",              category: "Domotique", src: `${DOMO}Motorisation%201.jpg`, span: "col-span-2 row-span-2" },
  { id: 56, title: "Portillon et volets motorisés", category: "Domotique", src: `${DOMO}Motorisation%202.jpg` },
  { id: 57, title: "Portail coulissant",            category: "Domotique", src: `${DOMO}portail.jpg` },

  // ── MONTAGE ET POSE ────────────────────────────────────────────────────
  { id: 60, title: "Dressing sur mesure",           category: "Montage et pose", src: `${MONT}dressing1.jpg`, span: "col-span-2 row-span-2" },
  { id: 61, title: "Dressing en cours de pose",     category: "Montage et pose", src: `${MONT}dressing2.jpg` },
  { id: 62, title: "Dressing finition",             category: "Montage et pose", src: `${MONT}dressing3.jpg` },
  { id: 63, title: "Pose armoire dressing",         category: "Montage et pose", src: `${MONT}IMG_20180807_170011.jpg` },
  { id: 64, title: "Cuisine en cours de pose",      category: "Montage et pose", src: `${MONT}1623250735131.jpg` },
  { id: 65, title: "Montage cuisine",               category: "Montage et pose", src: `${MONT}1623250758732.jpg` },
  { id: 66, title: "Cuisine assemblage",            category: "Montage et pose", src: `${MONT}1623250767845.jpg` },
  { id: 67, title: "Cuisine installée",             category: "Montage et pose", src: `${MONT}1623250775662.jpg` },
  { id: 68, title: "Finition cuisine",              category: "Montage et pose", src: `${MONT}1623250795542.jpg` },

  // ── ACCESSIBILITÉ PMR ──────────────────────────────────────────────────
  { id: 70, title: "Relais Vert PMR aménagé",       category: "Accessibilité PMR", src: `${PMR}PMR%20relais%20vert%20fini.jpg`, span: "col-span-2 row-span-2" },
  { id: 71, title: "Marquage parking PMR",          category: "Accessibilité PMR", src: `${PMR}PMR%20V%C3%A9to%20marquage.jpg` },
  { id: 72, title: "Bande podotactile",             category: "Accessibilité PMR", src: `${PMR}anti%20mouss%20relais%20vert.jpg` },
  { id: 73, title: "WC PMR adapté",                 category: "Accessibilité PMR", src: `${PMR}IMG_20181128_145129.jpg` },
  { id: 74, title: "Sanitaire PMR",                 category: "Accessibilité PMR", src: `${PMR}IMG_20181128_145145.jpg` },
  { id: 75, title: "Détail aménagement PMR",        category: "Accessibilité PMR", src: `${PMR}IMG_20181128_145158.jpg` },
  { id: 76, title: "WC PMR finition",               category: "Accessibilité PMR", src: `${PMR}IMG_20181128_145207.jpg` },
  { id: 77, title: "Pôle éducatif",                 category: "Accessibilité PMR", src: `${PMR}pole-educatif_1.jpg` },

  // ── DIVERS ─────────────────────────────────────────────────────────────
  { id: 80, title: "Décoration murale stencil",     category: "Divers", src: `${DIV}Sniper.jpg`, span: "col-span-2 row-span-2" },
  { id: 81, title: "Incrustation fleur de lys",     category: "Divers", src: `${DIV}canada.jpg` },
  { id: 82, title: "Construction sauna bois",       category: "Divers", src: `${DIV}DE2.jpg` },
  { id: 83, title: "Espace bien-être sauna",        category: "Divers", src: `${DIV}DEsauna.jpg` },
  { id: 84, title: "Spa sauna aménagé",             category: "Divers", src: `${DIV}DESpa%20sauna.JPG` },
  { id: 85, title: "Décoration craie sur vitrage",  category: "Divers", src: `${DIV}deco%20craie.jpg` },
  { id: 86, title: "Mur en pierres",                category: "Divers", src: `${DIV}IMG_20210306_162949.jpg` },
  { id: 87, title: "Maçonnerie pierres",            category: "Divers", src: `${DIV}IMG_20210308_170751.jpg` },
  { id: 88, title: "Fondations extérieures",        category: "Divers", src: `${DIV}IMG_20180926_112429.jpg` },
  { id: 89, title: "Fresque murale décorative",     category: "Divers", src: `${DIV}1647604363969.jpg` },
  { id: 90, title: "Peinture décorative intérieure",category: "Divers", src: `${DIV}1647604374002.jpg` },
  { id: 91, title: "Réalisation intérieure",        category: "Divers", src: `${DIV}1647604120694.jpg` },
  { id: 92, title: "Salamandre décorative",         category: "Divers", src: `${DIV}salamandre.jpg` },
  { id: 93, title: "Aménagement piscine",           category: "Divers", src: `${DIV}Piscine.jpg` },
  { id: 94, title: "Construction terrasse bois",    category: "Divers", src: `${DIV}P_20190515_144442.jpg` },
  { id: 95, title: "Terrasse bois en cours",        category: "Divers", src: `${DIV}P_20190516_082255.jpg` },
  { id: 96, title: "Réalisation divers",            category: "Divers", src: `${DIV}CBBK9034.JPG` },
  { id: 97, title: "Réalisation divers",            category: "Divers", src: `${DIV}FGCC9660.JPG` },
  { id: 98, title: "Réalisation divers",            category: "Divers", src: `${DIV}FSQI6054.JPG` },
  { id: 99, title: "Réalisation divers",            category: "Divers", src: `${DIV}GXKK4368.JPG` },
  { id: 100, title: "Réalisation divers",           category: "Divers", src: `${DIV}WLPZ2278.JPG` },
  { id: 101, title: "Réalisation divers",           category: "Divers", src: `${DIV}WVBI9205.JPG` },
  { id: 102, title: "Photo de chantier",            category: "Divers", src: `${DIV}IMG_1274.jpg` },
  { id: 103, title: "Photo de chantier",            category: "Divers", src: `${DIV}IMG_1772.jpg` },
  { id: 104, title: "Photo de chantier",            category: "Divers", src: `${DIV}IMG_1810.jpg` },
  { id: 105, title: "Photo de chantier",            category: "Divers", src: `${DIV}IMG_3126.jpg` },
  { id: 106, title: "Photo de chantier",            category: "Divers", src: `${DIV}IMG_1835.jpg` },

  // ── RÉNOVATION COMPLÈTE ────────────────────────────────────────────────
  { id: 110, title: "Rénovation maison ancienne",      category: "Rénovation complète", src: `${RENO}IMG_20180601_194141.jpg`, span: "col-span-2 row-span-2" },
  { id: 111, title: "Ouverture cloisons",              category: "Rénovation complète", src: `${RENO}IMG_20180601_194232.jpg` },
  { id: 112, title: "Salle de bain rénovée",           category: "Rénovation complète", src: `${RENO}AA.jpg` },
  { id: 113, title: "Douche à l'italienne",            category: "Rénovation complète", src: `${RENO}IMG_20181116_151834.jpg`, span: "col-span-2" },
  { id: 114, title: "Salle de bain moderne",           category: "Rénovation complète", src: `${RENO}IMG_20180808_160930.jpg` },
  { id: 115, title: "Baignoire d'angle et douche",     category: "Rénovation complète", src: `${RENO}IMG_20181120_090407.jpg`, span: "col-span-2" },
  { id: 116, title: "Suite parentale salle de bain",   category: "Rénovation complète", src: `${RENO}IMG_20181120_090558.jpg` },
  { id: 117, title: "Cloison BA13",                    category: "Rénovation complète", src: `${RENO}IMG_20180726_162322.jpg` },
  { id: 118, title: "Chantier 2018",                   category: "Rénovation complète", src: `${RENO}IMG_20180711_105029.jpg` },
  { id: 119, title: "Combles avant rénovation",        category: "Rénovation complète", src: `${RENO}IMG_20180814_092632.jpg` },
  { id: 120, title: "Structure combles",               category: "Rénovation complète", src: `${RENO}IMG_20180814_092638.jpg` },
  { id: 121, title: "Charpente avant travaux",         category: "Rénovation complète", src: `${RENO}IMG_20180814_092647.jpg` },
  { id: 122, title: "Salle de bain projet Clerc",      category: "Rénovation complète", src: `${RENO}Sdb%20clerc01.jpg` },
  { id: 123, title: "Finition salle de bain",          category: "Rénovation complète", src: `${RENO}Sdb%20clerc02.jpg` },
  { id: 124, title: "Rénovation SDB Olivier",          category: "Rénovation complète", src: `${RENO}Sdb%20oliv00.jpg` },
  { id: 125, title: "Douche faïence grise",            category: "Rénovation complète", src: `${RENO}Sdb%20oliv01.jpg` },
  { id: 126, title: "Salle de bain complète",          category: "Rénovation complète", src: `${RENO}Sdb%20oliv02.jpg` },
  { id: 127, title: "Baignoire et douche",             category: "Rénovation complète", src: `${RENO}Sdb%20oliv04.jpg` },
  { id: 128, title: "Salle de bain finition",          category: "Rénovation complète", src: `${RENO}Sdb%20oliv08.jpg` },
  { id: 129, title: "Baignoire projet Herzog",         category: "Rénovation complète", src: `${RENO}herzog%20Baignoire.jpg` },
  { id: 130, title: "Douche projet Herzog",            category: "Rénovation complète", src: `${RENO}herzog%20douche.jpg` },
  { id: 131, title: "Meuble vasque projet Herzog",     category: "Rénovation complète", src: `${RENO}herzog%20Meuble.jpg` },
  { id: 132, title: "Après rénovation",                category: "Rénovation complète", src: `${RENO}IMG_ap.jpg` },
  { id: 133, title: "Après travaux vue 1",             category: "Rénovation complète", src: `${RENO}IMG_Ap1.jpg` },
  { id: 134, title: "Après travaux vue 2",             category: "Rénovation complète", src: `${RENO}IMG_Ap2.jpg` },
  { id: 135, title: "Avant rénovation",                category: "Rénovation complète", src: `${RENO}IMG_av.jpg` },
  { id: 136, title: "État avant travaux vue 1",        category: "Rénovation complète", src: `${RENO}IMG_Av1.jpg` },
  { id: 137, title: "État avant travaux vue 2",        category: "Rénovation complète", src: `${RENO}IMG_Av2.jpg` },
  { id: 138, title: "Avant rénovation",                category: "Rénovation complète", src: `${RENO}SDF%20Avant.jpg` },
  { id: 139, title: "Rénovation projet Alex",          category: "Rénovation complète", src: `${RENO}Alex%2002.jpg` },
  { id: 140, title: "Chantier rénovation Alex",        category: "Rénovation complète", src: `${RENO}Alex%2011.jpg` },
  { id: 141, title: "Finitions chantier Alex",         category: "Rénovation complète", src: `${RENO}Alex%2012.jpg` },
  { id: 142, title: "Rénovation maison ancienne",      category: "Rénovation complète", src: `${RENO}1647603956321.jpg` },
  { id: 143, title: "Chantier en cours",               category: "Rénovation complète", src: `${RENO}1647604040913.jpg` },
  { id: 144, title: "Chantier rénovation 2019",        category: "Rénovation complète", src: `${RENO}IMG_20190213_112521.jpg` },
  { id: 145, title: "Chantier juillet 2018",           category: "Rénovation complète", src: `${RENO}IMG_20180719_164315.jpg` },
  { id: 146, title: "Isolation Isover mur",            category: "Rénovation complète", src: `${RENO}IMG_20190204_150307.jpg` },
  { id: 147, title: "Installation douche",             category: "Rénovation complète", src: `${RENO}douche.jpg` },
  { id: 148, title: "Douche buanderie",                category: "Rénovation complète", src: `${RENO}douchebuanderie.jpg` },
  { id: 149, title: "Montage salle de bain",           category: "Rénovation complète", src: `${RENO}PANO_20180921_171813.jpg` },
  { id: 150, title: "Pose salle de bain panorama",     category: "Rénovation complète", src: `${RENO}PANO_20180921_172630.jpg` },
  { id: 151, title: "Avant rénovation",                category: "Rénovation complète", src: `${RENO}avant162.jpg` },
  { id: 152, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}GWEW9713.JPG` },
  { id: 153, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}HOKR2983.JPG` },
  { id: 154, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2682.jpg` },
  { id: 155, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2695.jpg` },
  { id: 156, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2696.jpg` },
  { id: 157, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2700.jpg` },
  { id: 158, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2731.jpg` },
  { id: 159, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2739.jpg` },
  { id: 160, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2746.jpg` },
  { id: 161, title: "Rénovation chantier",             category: "Rénovation complète", src: `${RENO}IMG_2848.jpg` },

  // ── COLLECTIVITÉS ET ERP ──────────────────────────────────────────────
  { id: 160, title: "Foyer rural rénové",              category: "Collectivités et ERP", src: `${COLL}Foyer%20rural%2002.jpg`, span: "col-span-2 row-span-2" },
  { id: 161, title: "Salle communautaire",             category: "Collectivités et ERP", src: `${COLL}Foyer%20rural%2003.jpg` },
  { id: 162, title: "Salle des fêtes",                 category: "Collectivités et ERP", src: `${COLL}Foyer%20rural%2004.jpg` },
  { id: 163, title: "Patrimoine local rénové",         category: "Collectivités et ERP", src: `${COLL}Foyer%20rural%2005.jpg` },
  { id: 164, title: "Foyer rural plafond suspendu",    category: "Collectivités et ERP", src: `${COLL}IMG_20181019_150513.jpg` },
  { id: 165, title: "Foyer rural terminé",             category: "Collectivités et ERP", src: `${COLL}IMG_20181019_150605.jpg` },
  { id: 166, title: "Bâtiment collectif extérieur",    category: "Collectivités et ERP", src: `${COLL}1623250629731.jpg` },
  { id: 167, title: "Rénovation collectivité",         category: "Collectivités et ERP", src: `${COLL}Antoine%2001.jpg` },
  { id: 168, title: "Chantier bâtiment collectif",    category: "Collectivités et ERP", src: `${COLL}Antoine%2002.jpg` },
  { id: 169, title: "Rénovation bâtiment Antoine",    category: "Collectivités et ERP", src: `${COLL}Antoine%2003.jpg` },
  { id: 170, title: "Chantier collectivité",           category: "Collectivités et ERP", src: `${COLL}Antoine%2004.jpg` },
  { id: 171, title: "Travaux collectivité",            category: "Collectivités et ERP", src: `${COLL}Antoine%2005.jpg` },
  { id: 172, title: "Bâtiment collectif",              category: "Collectivités et ERP", src: `${COLL}Antoine%2006.jpg` },
  { id: 173, title: "Finitions collectivité",          category: "Collectivités et ERP", src: `${COLL}Antoine%2007.jpg` },
  { id: 174, title: "Rénovation terminée",             category: "Collectivités et ERP", src: `${COLL}Antoine%2008.jpg` },
  { id: 175, title: "Après rénovation collectivité",   category: "Collectivités et ERP", src: `${COLL}SDF%20apres.jpg` },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Tout");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filtered =
    activeFilter === "Tout"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  const currentIndex = selectedItem
    ? filtered.findIndex((i) => i.id === selectedItem.id)
    : -1;

  const goNext = useCallback(() => {
    if (currentIndex < filtered.length - 1)
      setSelectedItem(filtered[currentIndex + 1]);
  }, [currentIndex, filtered]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) setSelectedItem(filtered[currentIndex - 1]);
  }, [currentIndex, filtered]);

  useEffect(() => {
    const saved = sessionStorage.getItem("galleryFilter");
    if (saved && categories.includes(saved)) {
      setActiveFilter(saved);
      sessionStorage.removeItem("galleryFilter");
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedItem, goNext, goPrev]);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedItem]);

  return (
    <section className="relative py-16 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-red-500" />
            Nos réalisations
            <span className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            La qualité qui{" "}
            <span className="text-red-600">se voit</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Parcourez nos chantiers réalisés et laissez-vous inspirer pour votre prochain projet.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.35)]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/8"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setSelectedItem(item)}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden bg-[#111] ${item.span ?? ""}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400 z-20" />
                <div className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 scale-0 group-hover:scale-100">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-[#111]">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1024px"
                  priority
                />
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 w-9 h-9 rounded-full bg-white/8 hover:bg-white/18 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {currentIndex > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-0 top-[45%] -translate-x-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white/8 hover:bg-white/18 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              {currentIndex < filtered.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-0 top-[45%] translate-x-14 -translate-y-1/2 w-10 h-10 rounded-full bg-white/8 hover:bg-white/18 flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
