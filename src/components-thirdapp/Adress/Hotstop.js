import React from 'react'
import Hotstops from './Hotstops'
function Hotstop() {
    let h=
    [
        {
            "id": 793,
            "AreaName": "Gachibowli",
            "latitude": 17.4436,
            "longitude": 78.3510,
            "HeadPerson": {
                "name": "Eva Wilson",
                "phone-number": "9876543214",
                "email": "evawilson@example.com"
            },
            "NumberOfPeople": 100
        },
        {
            "id": 794,
            "AreaName": "Kukatpally",
            "latitude": 17.4949,
            "longitude": 78.3993,
            "HeadPerson": {
                "name": "David Lee",
                "phone-number": "9876543215",
                "email": "davidlee@example.com"
            },
            "NumberOfPeople": 150
        },
        {
            "id": 795,
            "AreaName": "Madhapur",
            "latitude": 17.4504,
            "longitude": 78.3910,
            "HeadPerson": {
                "name": "Grace Chen",
                "phone-number": "9876543216",
                "email": "gracechen@example.com"
            },
            "NumberOfPeople": 200
        },
        {
            "id": 796,
            "AreaName": "Ameerpet",
            "latitude": 17.4375,
            "longitude": 78.4483,
            "HeadPerson": {
                "name": "Michael Davis",
                "phone-number": "9876543217",
                "email": "michaeldavis@example.com"
            },
            "NumberOfPeople": 120
        },
        {
            "id": 797,
            "AreaName": "Begumpet",
            "latitude": 17.4445,
            "longitude": 78.4467,
            "HeadPerson": {
                "name": "Linda Brown",
                "phone-number": "9876543218",
                "email": "lindabrown@example.com"
            },
            "NumberOfPeople": 180
        },
        {
            "id": 798,
            "AreaName": "Banjara Hills",
            "latitude": 17.4159,
            "longitude": 78.4347,
            "HeadPerson": {
                "name": "John Smith",
                "phone-number": "9876543219",
                "email": "johnsmith@example.com"
            },
            "NumberOfPeople": 90
        },
        {
            "id": 799,
            "AreaName": "Hitech City",
            "latitude": 17.4484,
            "longitude": 78.3908,
            "HeadPerson": {
                "name": "Mary Johnson",
                "phone-number": "9876543220",
                "email": "maryjohnson@example.com"
            },
            "NumberOfPeople": 140
        },
        {
            "id": 800,
            "AreaName": "Jubilee Hills",
            "latitude": 17.4215,
            "longitude": 78.4344,
            "HeadPerson": {
                "name": "Robert Williams",
                "phone-number": "9876543221",
                "email": "robertwilliams@example.com"
            },
            "NumberOfPeople": 160
        },
        {
            "id": 801,
            "AreaName": "Kondapur",
            "latitude": 17.4625,
            "longitude": 78.3517,
            "HeadPerson": {
                "name": "Patricia Jones",
                "phone-number": "9876543222",
                "email": "patriciajones@example.com"
            },
            "NumberOfPeople": 110
        },
        {
            "id": 802,
            "AreaName": "Manikonda",
            "latitude": 17.4049,
            "longitude": 78.3918,
            "HeadPerson": {
                "name": "Richard Wilson",
                "phone-number": "9876543223",
                "email": "richardwilson@example.com"
            },
            "NumberOfPeople": 130
        },
        {
            "id": 803,
            "AreaName": "Secunderabad",
            "latitude": 17.4500,
            "longitude": 78.5000,
            "HeadPerson": {
                "name": "Linda Brown",
                "phone-number": "9876543224",
                "email": "lindabrown@example.com"
            },
            "NumberOfPeople": 170
        },
        {
            "id": 804,
            "AreaName": "Bachupally",
            "latitude": 17.5326,
            "longitude": 78.3428,
            "HeadPerson": {
                "name": "Kevin Miller",
                "phone-number": "9876543225",
                "email": "kevinmiller@example.com"
            },
            "NumberOfPeople": 190
        },
        {
            "id": 805,
            "AreaName": "Miyapur",
            "latitude": 17.4965,
            "longitude": 78.3550,
            "HeadPerson": {
                "name": "Linda Davis",
                "phone-number": "9876543226",
                "email": "lindadavis@example.com"
            },
            "NumberOfPeople": 210
        },
        {
            "id": 806,
            "AreaName": "Nallagandla",
            "latitude": 17.4482,
            "longitude": 78.3136,
            "HeadPerson": {
                "name": "Robert Brown",
                "phone-number": "9876543227",
                "email": "robertbrown@example.com"
            },
            "NumberOfPeople": 220
        }
    ]
   return(
  
    
     
        <div>
          <div className='container'>
            <div className='row g-3 '>
              {h.map((item) => (
                <Hotstops key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
     
    
   )
}

export default Hotstop