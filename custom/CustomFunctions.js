const convertObjData = (data) => {
  const DataConvert = data.map((item) => {
    const Obj = item.toObject();
    Obj._id = `${Obj._id}`;
    if (Obj.createdAt) {
      Obj.createdAt = Obj.createdAt.toISOString();
    }

    if (Obj.updatedAt) {
      Obj.updatedAt = Obj.updatedAt.toISOString();
    }
    return Obj;
  });
  return DataConvert;
};

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
}

export { convertObjData, capitalizeWords };
