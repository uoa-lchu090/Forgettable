import mongoose from 'mongoose';
import Encounter, {EncounterModel} from '../models/encounter.model';

const createEncounter = async (encounterDetails: EncounterModel) => {
    const encounter = new Encounter(encounterDetails);
    await encounter.save();
    return encounter;
};

const getAllEncounters = async (userEncounters: mongoose.Types.ObjectId[]) => {

    // Get all encounters from the db which belongs to the user
    let foundUserEncounters = await Encounter.find({ _id: { $in: userEncounters } });

    return foundUserEncounters;
}

const updateEncounter = async (objectID: string, encounterDetails: EncounterModel)=>{
    console.log(objectID)
    const updatedEncounter = await Encounter.findByIdAndUpdate(objectID, encounterDetails, {new: true});
    return updatedEncounter;
}

const encounterService = {
    createEncounter,
    getAllEncounters,
    updateEncounter
  }

export default encounterService;