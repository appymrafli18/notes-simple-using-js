import Catatan from '../models/CatatanModels.js';

export const getCatatan = async (_, res) => {
  try {
    const response = await Catatan.findAll();
    if (!response)
      return res.status(404).json({
        message: 'Data Tidak Di Temukan',
        code: 404,
      });
    res.status(200).json({
      message: 'Berhasil Get All Catatan',
      code: 200,
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      code: 500,
    });
  }
};

export const getCatatanSpesific = async (req, res) => {
  const { id } = req.params;

  const response = await Catatan.findOne({
    where: {
      uuid: id,
    },
  });

  if (!response)
    return res.status(404).json({
      message: 'Catatan Tidak Ditemukan',
      code: 404,
    });

  res.status(200).json({
    message: 'Berhasil Get Spesific Catatan',
    code: 200,
    data: response,
  });
};

export const createCatatan = async (req, res) => {
  const { title, description, content } = req.body;
  if (!title)
    return res.status(401).json({
      message: 'Mohon masukkan Judul',
      code: 401,
    });

  try {
    await Catatan.create({
      title,
      description,
      content,
    });

    res.status(201).json({
      message: 'Berhasil Membuat Catatan',
      code: 201,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 401,
    });
  }
};

export const updateCatatan = async (req, res) => {
  const { title, description, content } = req.body;

  const response = await Catatan.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!response)
    return res.status(404).json({
      message: 'Catatan tidak di temukan!',
      code: 404,
    });

  try {
    await Catatan.update(
      {
        title: title || response.title,
        description: description || response.description,
        content: content || response.content,
      },
      {
        where: {
          id: response.id,
        },
      }
    );

    res.status(200).json({
      message: 'Berhasil Merubah Catatan',
      code: 200,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      code: 400,
    });
  }
};

export const deleteCatatan = async (req, res) => {
  const response = await Catatan.findOne({
    where: {
      uuid: req.params.id,
    },
  });

  if (!response)
    return res.status(404).json({
      message: 'Catatan tidak di temukan',
      code: 404,
    });

  try {
    await Catatan.destroy({
      where: {
        id: response.id,
      },
    });
    return res.status(200).json({
      message: 'Berhasil menghapus Catatan',
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Catatan sedang bermasalah',
      code: 500,
    });
  }
};
