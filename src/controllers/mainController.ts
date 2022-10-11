import nsideModel from "../models/nsideM";
import onesideModel from "../models/onesideM";
import { Request, Response } from "express";

//https://mongoosejs.com/docs/queries.html

async function getAll(req: Request, res: Response) {
  try {
    const allData = await nsideModel.find({}).populate("FK_neve", "-_id");
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).send(error);
  }
}
//
async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const dataById = await nsideModel.findById(id).populate("FK_neve", "-_id");
    if (!dataById) {
      return res
        .status(404)
        .json({ msg: `Document with the id ${id} not found` });
    }
    res.status(200).json({ dataById });
  } catch (error) {
    res.status(500).json({ error });
  }
}
//
async function create(req: Request, res: Response) {
  try {
    const bodyForCheck = req.body;
    const createdDocument = await nsideModel.create(req.body);

    res.status(200).json({
      message: "The input was recorded succesfully!",
      data: createdDocument,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ error, errorMsg: error.message });
  }
}
//
async function modifyPatch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const modificationResult = await nsideModel
      .findOneAndUpdate(body, { new: true, runValidators: true })
      .populate("FK_neve", "-_id");
    if (!modificationResult) {
      return res
        .status(404)
        .json({ msg: `Document with the id ${id} not found` });
    }
    res.status(200).json({ data: modificationResult });
  } catch (error) {
    res.status(500).json(error);
  }
}
async function modifyPut(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = req.body;
    const modificationResult = await nsideModel.replaceOne({ _id: id }, body, {
      runValidators: true,
    });
    if (modificationResult.modifiedCount) {
      const updatedDoc = await nsideModel
        .findById(id)
        .populate("FK_neve", "-_id");
      res.send(updatedDoc);
    } else {
      res.status(404).send({ message: `Document with id ${id} not found!` });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
async function deleteById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletedDocument = await nsideModel.findByIdAndRemove(id);
    if (!deletedDocument) {
      return res.status(404).json({ msg: `Document with id ${id} not found!` });
    }
    res.status(200).json({ deletedDocument });
  } catch (error) {
    res.status(500).json({ error });
  }
}

export { getAll, getById, create, modifyPatch, modifyPut, deleteById };
