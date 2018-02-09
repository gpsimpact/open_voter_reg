class RegistrantModel {
  updateRegistrantByHash = async (data, ctx) => {
    let hash = data.hash;
    if (hash === undefined) {
      // create a new record allow db to assign hash
      const insert = await ctx.connectors.registrant.insertRegistrant(data);
      hash = insert[0].hash;
      // return await ctx.connectors.registrant.registrantByHash.load(hash);
      return await ctx.connectors.registrant.registrantByHash
        .clear(hash)
        .prime(hash, insert[0])
        .load(hash);
    }
    // does this hash already exist in db?
    const existingRecord = await ctx.connectors.registrant.registrantByHash.load(hash);
    if (existingRecord) {
      // yes - do update
      const update = await ctx.connectors.registrant.updateRegistrantByHash(hash, data);
      // record has been mutated, so prime the dataloader with new data and return it
      return await ctx.connectors.registrant.registrantByHash
        .clear(hash)
        .prime(hash, update[0])
        .load(hash);
    }
    // no - do insert
    const manualInsert = await ctx.connectors.registrant.insertRegistrant(data);
    hash = manualInsert[0].hash;
    // return await ctx.connectors.registrant.registrantByHash.load(hash);
    return await ctx.connectors.registrant.registrantByHash
      .clear(hash)
      .prime(hash, manualInsert[0])
      .load(hash);
  };
}

export default RegistrantModel;
