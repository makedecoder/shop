const photo=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
export const grocery=[
['आटा, चावल व सूजी','घर की रसोई का आधार','चक्की फ्रेश आटा,बासमती राइस,कतरनी चावल,बारीक सूजी,मैदा,दलिया','photo-1586201375761-83865001e31c','DAILY ESSENTIALS'],
['दालें, छोले व राजमा','हर दिन पोषण से भरपूर','अरहर दाल,धुली मूंग दाल,चना दाल,काबुली चना,चित्रा राजमा,उड़द दाल','photo-1515543904379-3d757afe72e4','WHOLESOME & PURE'],
['कच्ची घानी तेल व शुद्ध घी','स्वाद भी, शुद्धता भी','सरसों तेल,सोयाबीन तेल,देसी घी,डालडा','photo-1474979266404-7eaacbcd87c5','KITCHEN STAPLES'],
['रसोई मसाले व नमक','हर व्यंजन में अपना स्वाद','हल्दी,धनिया,मिर्च,जीरा,अजवाइन,तेजपत्ता,लौंग,टाटा नमक','photo-1596040033229-a9821ebd058d','AROMA & FLAVOUR'],
['देसी आलू, प्याज, लहसुन व अदरक','आपकी रोज़ की रसोई के साथी','नया आलू,देसी प्याज,लहसुन,ताजा अदरक','photo-1518977676601-b53f82aba655','KITCHEN VEGETABLES'],
['चाय, चीनी, गुड़ व बिस्कुट','छोटी-छोटी खुशियों का सामान','कड़क चायपत्ती,सफेद चीनी,देसी गुड़,सूजी रस्क,नमकीन','photo-1544787219-7f47ccb76574','TEA & TREATS'],
['सफाई एवं घरेलू साबुन','स्वच्छ घर, सुखी परिवार','कपड़े धोने का पाउडर,बर्तन बार,फिनाइल,अगरबत्ती,माचिस','photo-1585421514738-01798e348b17','HOME CARE']
].map(([title,description,items,img,tag])=>({title,description,items:items.split(','),image:photo(img),tag,type:'किराना'}));
export const workshop=[
['General Cycle Repairing','देसी रोडस्टर से लेकर आधुनिक रेंजर तक','पंचर,ट्यूब,टायर,हवा,ब्रेक टाइट,वायर,चेन,पैडल,सीट,हैंडल,स्टैंड'],
['Wheel & Tyre Repair','मजबूत पहिए, आरामदायक सफर','Front Wheel,Rear Wheel,Wheel Alignment,Spokes,Rim,Hub,Bearings,Freewheel,Greasing'],
['Brake System Repair','हर मोड़ पर भरोसेमंद पकड़','Brake Shoe,Brake Pad,Cable,Lever,Disc Brake,Brake Adjustment'],
['Chain & Gear Repair','हर पैडल के साथ सहज रफ्तार','Chain Cleaning,Lubrication,Chain Replacement,Gear Tuning,Shifter,Derailleur,Crankset'],
['Pedal & Handle Repair','संतुलन और आराम का ध्यान','Pedals,Crank,Bottom Bracket,Handle,Grip,Fork Repair'],
['Washing & Maintenance','आपकी साइकिल की पूरी देखभाल','Full Washing,Polishing,Deep Clean,Full Servicing,Oil & Greasing'],
['Spare Parts Replacement','ओरिजिनल पार्ट्स, भरोसेमंद साथ','Tube,Tyre,Brake Wire,Brake Shoe Replacement,Chain,Replacement Pedals,Seat,Grips,Bell,Stand,Mudguard,Carrier'],
['Other Special Services','पुरानी यादों को फिर नई रफ्तार','New Cycle Assembly,Old Cycle Overhaul,Painting,Training Wheels,Kids Cycle Repair']
].map(([title,description,items],i)=>({title,description,items:items.split(','),image:photo(['photo-1485965120184-e220f721d03e','photo-1511994298241-608e28f14fde','photo-1532298229144-0ec0c57515c7','photo-1571068316344-75bc76f77890'][i%4]),tag:'WORKSHOP SERVICE',type:'साइकिल सेवा'}));
export const slides=[photo('photo-1604908177225-fc94ca1e4f21'),photo('photo-1586201375761-83865001e31c'),photo('photo-1485965120184-e220f721d03e'),photo('photo-1532298229144-0ec0c57515c7')];
