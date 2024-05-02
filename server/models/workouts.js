// model for workout

const fs = require('fs/promises');

const fileName = __dirname + '/../data/workouts.json';

/** @type { Promise< { items: Workout[] } > } */
const dataP = fs
        .access(fileName, fs.constants.F_OK)
        .then(() => fs.readFile(fileName, 'utf8'))
        .then(content => JSON.parse(content))


async function save() {
    const data = await dataP;
    return fs.writeFile(fileName, JSON.stringify(data, null, 2));
}

/**
 * @typedef {import('../../client/src/model/workouts').Workout} Workout
 * */

/**
 * @returns {Promise<Workout[]>}
 * */
async function getAll() {
    const data = await dataP;
    return data.items.map(x => ({
        id: x.id,
        handle: x.handle,
        UserWorkout: x.UserWorkout,
        visible: x.visible,
    }));
}

/**
 * @param {number} id
 * @returns {Promise<Workout | null>}
 * */
async function getWorkoutByUserId(id) {
    const data = await dataP;
    const workout = data.items.find(item => item.id == id);
    return workout ? workout : null;
}



/**
 * @param {string} q
 * @returns {Promise<Workout[]>}
 * */
async function search(q) {
    return (await getAll()).filter(item => 
        item.id.toString() === q ||
        new RegExp(q, 'i').test(item.handle));
}


/**
 * @param {number} id
 * @param {import('../../client/src/model/workouts').UserWorkout} userWorkout
 * @returns {Promise<Workout | null>}
 */
async function addUserWorkout(id, userWorkout) {
    const data = await dataP;
    const workout = data.items.find(item => item.id == id);
    
    if (workout) {

        const newWorkout = {
            workout_id: workout.UserWorkout.length + 1,
            name: userWorkout.name,
            sets: userWorkout.sets,
            reps: userWorkout.reps,
            weight: userWorkout.weight,
            calories: userWorkout.calories,
        };
        workout.UserWorkout.push(newWorkout);
        console.log("2: About to save");

        await save();  // Save the changes
        console.log("3: Saved")
        console.log("4: About to return workout");
        return workout;
    }
return null;

}

/**
 * @param {number} id
 * @param {number} workout_id
 * @returns {Promise<import('../../client/src/model/workouts').UserWorkout | null>}
 * */

async function remove(id, workout_id) {
    const data = await dataP;
    const workout = data.items.find(item => item.id == id);
    if (workout) {
        const index = workout.UserWorkout.findIndex(userWorkout => userWorkout.workout_id == workout_id);
        if (index >= 0) {
            const deleted = workout.UserWorkout.splice(index, 1);
            await save()
            return deleted[0];
        }
    }
    return null;
}


module.exports = {
    getAll, getWorkoutByUserId, search, remove, addUserWorkout
}


