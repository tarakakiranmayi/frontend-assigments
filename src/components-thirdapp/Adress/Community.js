import React from 'react'
import Communities from './Communities'
function Community() {
   let com=
   [
       {
           "Name": "VNRVJIET Hostels",
           "CommunityType": "Hostels",
           "Area": "Kukatpally",
           "Latitude": 17.4931,
           "Longitude": 78.4000,
           "CommunityHeadDetails": {
               "Name": "Alice Johnson",
               "PhoneNo": "9876543215",
               "Email": "alicejohnson@example.com"
           }
       },
       {
           "Name": "Sri Sai Apartments",
           "CommunityType": "Apartment",
           "Area": "Jubilee Hills",
           "Latitude": 17.4215,
           "Longitude": 78.4344,
           "CommunityHeadDetails": {
               "Name": "David Lee",
               "PhoneNo": "9876543218",
               "Email": "davidlee@example.com"
           }
       },
       {
           "Name": "Royal Residency Hotel",
           "CommunityType": "Hotels",
           "Area": "Begumpet",
           "Latitude": 17.4445,
           "Longitude": 78.4467,
           "CommunityHeadDetails": {
               "Name": "Grace Chen",
               "PhoneNo": "9876543217",
               "Email": "gracechen@example.com"
           }
       },
       {
           "Name": "Green Valley Colony",
           "CommunityType": "Colony",
           "Area": "Manikonda",
           "Latitude": 17.4049,
           "Longitude": 78.3918,
           "CommunityHeadDetails": {
               "Name": "Bob Brown",
               "PhoneNo": "9876543219",
               "Email": "bobbrown@example.com"
           }
       },
       {
           "Name": "Springfield Function Hall",
           "CommunityType": "Function Hall",
           "Area": "Kondapur",
           "Latitude": 17.4625,
           "Longitude": 78.3517,
           "CommunityHeadDetails": {
               "Name": "Emily Clark",
               "PhoneNo": "9876543220",
               "Email": "emilyclark@example.com"
           }
       },
       {
           "Name": "Golden Towers Apartment",
           "CommunityType": "Apartment",
           "Area": "Gachibowli",
           "Latitude": 17.4479,
           "Longitude": 78.3762,
           "CommunityHeadDetails": {
               "Name": "James Smith",
               "PhoneNo": "9876543221",
               "Email": "jamessmith@example.com"
           }
       },
       {
           "Name": "Sunrise Hostels",
           "CommunityType": "Hostels",
           "Area": "Hitech City",
           "Latitude": 17.4484,
           "Longitude": 78.3908,
           "CommunityHeadDetails": {
               "Name": "Olivia Taylor",
               "PhoneNo": "9876543222",
               "Email": "oliviataylor@example.com"
           }
       },
       {
           "Name": "Moonlight Colony",
           "CommunityType": "Colony",
           "Area": "Madhapur",
           "Latitude": 17.4481,
           "Longitude": 78.3904,
           "CommunityHeadDetails": {
               "Name": "William Anderson",
               "PhoneNo": "9876543223",
               "Email": "williamanderson@example.com"
           }
       },
       {
           "Name": "Ocean View Hotel",
           "CommunityType": "Hotels",
           "Area": "Banjara Hills",
           "Latitude": 17.4159,
           "Longitude": 78.4347,
           "CommunityHeadDetails": {
               "Name": "Sophia Garcia",
               "PhoneNo": "9876543224",
               "Email": "sophiagarcia@example.com"
           }
       },
       {
           "Name": "Palm Grove Function Hall",
           "CommunityType": "Function Hall",
           "Area": "Miyapur",
           "Latitude": 17.4931,
           "Longitude": 78.4054,
           "CommunityHeadDetails": {
               "Name": "Daniel Martinez",
               "PhoneNo": "9876543225",
               "Email": "danielmartinez@example.com"
           }
       },
       {
           "Name": "Emerald Apartments",
           "CommunityType": "Apartment",
           "Area": "Hafeezpet",
           "Latitude": 17.4832,
           "Longitude": 78.3604,
           "CommunityHeadDetails": {
               "Name": "Ava Rodriguez",
               "PhoneNo": "9876543226",
               "Email": "avarodriguez@example.com"
           }
       },
       {
           "Name": "Silver Sands Hostels",
           "CommunityType": "Hostels",
           "Area": "Kothaguda",
           "Latitude": 17.4427,
           "Longitude": 78.3905,
           "CommunityHeadDetails": {
               "Name": "Noah Wilson",
               "PhoneNo": "9876543227",
               "Email": "noahwilson@example.com"
           }
       },
       {
           "Name": "Diamond Colony",
           "CommunityType": "Colony",
           "Area": "Nallagandla",
           "Latitude": 17.4482,
           "Longitude": 78.3136,
           "CommunityHeadDetails": {
               "Name": "Mia Martinez",
               "PhoneNo": "9876543228",
               "Email": "miamartinez@example.com"
           }
       },
       {
           "Name": "Sunset Hotel",
           "CommunityType": "Hotels",
           "Area": "Attapur",
           "Latitude": 17.3679,
           "Longitude": 78.4492,
           "CommunityHeadDetails": {
               "Name": "Ethan Thompson",
               "PhoneNo": "9876543229",
               "Email": "ethanthompson@example.com"
           }
       },
       {
           "Name": "Rainbow Function Hall",
           "CommunityType": "Function Hall",
           "Area": "Chandanagar",
           "Latitude": 17.4964,
           "Longitude": 78.3496,
           "CommunityHeadDetails": {
               "Name": "Sophie Martinez",
               "PhoneNo": "9876543230",
               "Email": "sophiemartinez@example.com"
           }
       }
   ]
  
  return (
    <div>
        <div className='container'>
            <div className='row g-3 '>
                {
                com.map((item)=>
                 <Communities data={item}/>
                )
            }
            </div>

        </div>
    </div>
  )
}

export default Community