import recordService from "../services/recordService.js";
const getRecordForWorkout = (req, res) => {
    try { 
        const workoutId = req.params.workoutId;
        console.log('workoutId', workoutId);
        const record= recordService.getRecordForWorkout(workoutId);

       if (record.length === 0) {
            res.status(400).send({ status: "FAILED", data: { error: `Can't find workout with the id '${workoutId}'` } });
            return;
        }
        else{
            res.send({ status: "OK", data: record });
        }

       
        
    } 
    catch (error) {
        throw error;
    };
};
export default { getRecordForWorkout };