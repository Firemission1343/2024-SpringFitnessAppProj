// controller for workout
const workouts = require('../models/workouts')
const express = require('express');
const app = express.Router();
/*
    Ways that we send information to the server:
    1. Path parameters
    2. Query parameters
    3. Body
    4. Headers
*/

/** 
 * @typedef {import('../../client/src/model/workouts').Workout} Workout 
 * 
 * @typedef {import('../../client/src/model/workouts').UserWorkout} UserWorkout 
 * @typedef {import('../../client/src/model/transportTypes').DataEnvelope<UserWorkout> } UserWorkoutDataEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataListEnvelope<UserWorkout> } UserWorkoutDataListEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataEnvelope<Workout> } WorkoutDataEnvelope
 * @typedef {import('../../client/src/model/transportTypes').DataListEnvelope<Workout> } WorkoutDataListEnvelope
 * */

app
    .get('/', (req, res, next) => {
        workouts.getAll()
        .then(all => {
            /** @type { WorkoutDataListEnvelope } */
            const response = {
                data: all,
                totalCount: all.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
        
    })
    .get('/search', (req, res, next) => {

        const search = req.query.q;
        if(typeof search !== 'string' ) throw new Error('search is required');
        workouts.search(search)
        .then(result => {
            /** @type { WorkoutDataListEnvelope } */
            const response = {
                data: result,
                totalCount: result.length,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })

    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        workouts.getWorkoutByUserId(+id)
        .then(result => {
            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })

    .post('/:id', (req, res, next) => {
        const id = Number(req.params.id); 
        const newUserWorkout = req.body;

        console.log("1: About to add user workout");
        workouts.addUserWorkout(id,newUserWorkout)
        .then(result => {
            console.log("5: Returned from add user workout");

            /** @type { WorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })


    .delete('/:id/:workout_id', (req, res, next) => {
        const id = Number(req.params.id);
        const workout_id = Number(req.params.workout_id);
        workouts.remove(id, workout_id)
        .then(result => {
            /** @type { UserWorkoutDataEnvelope } */
            const response = {
                data: result,
                isSuccess: true,
            }
            res.send(response);
        }).catch(next);
    })
module.exports = app