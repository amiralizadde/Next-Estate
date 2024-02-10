import mongoose,{Schema} from "mongoose";

const schema = mongoose.Schema({
  values: {
    BuildingCharge: {
      type: String,
    },
    allFloor: {
      type: String,
    },
    belvar: {
      type: String,
    },
    city: {
      type: String,
    },

    codePost: {
      type: String,
    },

    deposit: {
      type: String,
    },
    floor: {
      type: String,
    },
    fullAddress: {
      type: String,
    },
    heating: {
      type: String,
    },
    meterage: {
      type: String,
    },
    monthlyRent: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
    price: {
      type: String,
    },
    room: {
      type: String,
    },
    statusAd: {
      type: String,
      required: true,
    },
    typeState: {
      type: String,
      required: true,
    },
  },
  features: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      featureItem: {
        type: String,
        required: true,
      },
    },
  ],
  image: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true
  },
});

const StateModels = mongoose.models?.state || mongoose.model("state", schema);

export default StateModels;
