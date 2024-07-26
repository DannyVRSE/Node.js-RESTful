import supertest from "supertest";
import server from "../../index.js";
const requestWithSupertest = supertest(server);

//test gets response type, status, and body

describe ('GET "/"', ()=>{
    test('GET "/" returns all workouts', async()=>{
        const res= await requestWithSupertest.get('/api/v1/workouts')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body.data).toEqual([{
            "id": "61dbae02-c147-4e28-863c-db7bd402b2d6",
            "name": "Tommy V",
            "mode": "For Time",
            "equipment": [
              "barbell",
              "rope"
            ],
            "exercises": [
              "21 thrusters",
              "12 rope climbs, 15 ft",
              "15 thrusters",
              "9 rope climbs, 15 ft",
              "9 thrusters",
              "6 rope climbs, 15 ft"
            ],
            "createdAt": "4/20/2022, 2:21:56 PM",
            "updatedAt": "4/20/2022, 2:21:56 PM",
            "trainerTips": [
              "Split the 21 thrusters as needed",
              "Try to do the 9 and 6 thrusters unbroken",
              "RX Weights: 115lb/75lb"
            ]
          },
          {
            "id": "4a3d9aaa-608c-49a7-a004-66305ad4ab50",
            "name": "Dead Push-Ups",
            "mode": "AMRAP 10",
            "equipment": [
              "barbell"
            ],
            "exercises": [
              "15 deadlifts",
              "15 hand-release push-ups"
            ],
            "createdAt": "1/25/2022, 1:15:44 PM",
            "updatedAt": "3/10/2022, 8:21:56 AM",
            "trainerTips": [
              "Deadlifts are meant to be light and fast",
              "Try to aim for unbroken sets",
              "RX Weights: 135lb/95lb"
            ]
          },
          {
            "id": "d8be2362-7b68-4ea4-a1f6-03f8bc4eede7",
            "name": "Heavy DT",
            "mode": "5 Rounds For Time",
            "equipment": [
              "barbell",
              "rope"
            ],
            "exercises": [
              "12 deadlifts",
              "9 hang power cleans",
              "6 push jerks"
            ],
            "createdAt": "11/20/2021, 5:39:07 PM",
            "updatedAt": "4/22/2022, 5:49:18 PM",
            "trainerTips": [
              "Aim for unbroken push jerks",
              "The first three rounds might feel terrible, but stick to it",
              "RX Weights: 205lb/145lb"
            ]
          },
          {
            "name": "Core Buster",
            "mode": "AMRAP 20",
            "equipment": [
              "rack",
              "barbell",
              "abmat"
            ],
            "exercises": [
              "15 toes to bars",
              "10 thrusters",
              "30 abmat sit-ups"
            ],
            "trainerTips": [
              "Split your toes to bars in two sets maximum",
              "Go unbroken on the thrusters",
              "Take the abmat sit-ups as a chance to normalize your breath"
            ],
            "id": "a24d2618-01d1-4682-9288-8de1343e53c7",
            "createdAt": "4/22/2022, 5:50:17 PM",
            "updatedAt": "4/22/2022, 5:50:17 PM"
          },
          {
            "name": "Jumping (Not) Made Easy",
            "mode": "AMRAP 12",
            "equipment": [
              "jump rope"
            ],
            "exercises": [
              "10 burpees",
              "25 double-unders"
            ],
            "trainerTips": [
              "Scale to do 50 single-unders, if double-unders are too difficult"
            ],
            "id": "8f8318f8-b869-4e9d-bb78-88010193563a",
            "createdAt": "4/25/2022, 2:45:28 PM",
            "updatedAt": "4/25/2022, 2:45:28 PM"
          },
          {
            "name": "Burpee Meters",
            "mode": "3 Rounds For Time",
            "equipment": [
              "Row Erg"
            ],
            "exercises": [
              "Row 500 meters",
              "21 burpees",
              "Run 400 meters",
              "Rest 3 minutes"
            ],
            "trainerTips": [
              "Go hard",
              "Note your time after the first run",
              "Try to hold your pace"
            ],
            "id": "0a5948af-5185-4266-8c4b-818889657e9d",
            "createdAt": "4/25/2022, 2:48:53 PM",
            "updatedAt": "4/25/2022, 2:48:53 PM"
          },
          {
            "name": "Dumbbell Rower",
            "mode": "AMRAP 15",
            "equipment": [
              "Dumbbell"
            ],
            "exercises": [
              "15 dumbbell rows, left arm",
              "15 dumbbell rows, right arm",
              "50-ft handstand walk"
            ],
            "trainerTips": [
              "RX weights for women: 35-lb",
              "RX weights for men: 50-lb"
            ],
            "id": "3dc53bc8-27b8-4773-b85d-89f0a354d437",
            "createdAt": "4/25/2022, 2:56:03 PM",
            "updatedAt": "4/25/2022, 2:56:03 PM"
          }
        ]
        )
    })
})