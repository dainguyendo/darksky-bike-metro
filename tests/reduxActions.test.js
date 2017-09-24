import * as types from '../app/js/redux/constants/criteriaConstants';
import * as actions from '../app/js/redux/actions/criteriaActions';

describe('actions', () => {
  it('create rain action', () => {
    const payload = 60;
    const expectedAction = {
      type: types.SAVE_RAIN,
      payload
    };
    expect(actions.saveRain(payload)).toEqual(expectedAction);
  });

  it('create latitude action', () => {
    const payload = 60.2312;
    const expectedAction = {
      type: types.SAVE_LATITUDE,
      payload
    };
    expect(actions.saveLatitude(payload)).toEqual(expectedAction);
  });

  it('create longitude action', () => {
    const payload = 60.2312;
    const expectedAction = {
      type: types.SAVE_LONGITUDE,
      payload
    };
    expect(actions.saveLongitude(payload)).toEqual(expectedAction);
  });

  it('create min temp action', () => {
    const payload = 32;
    const expectedAction = {
      type: types.SAVE_MINTEMP,
      payload
    };
    expect(actions.saveMinTemp(payload)).toEqual(expectedAction);
  });

  it('create max temp action', () => {
    const payload = 32;
    const expectedAction = {
      type: types.SAVE_MAXTEMP,
      payload
    };
    expect(actions.saveMaxTemp(payload)).toEqual(expectedAction);
  });

  it('create data action', () => {
    const payload = {};
    const expectedAction = {
      type: types.SAVE_DATA,
      payload
    };
    expect(actions.saveData(payload)).toEqual(expectedAction);
  });

  it('create unix time action', () => {
    const payload = 2312312;
    const expectedAction = {
      type: types.SAVE_UNIXTIME,
      payload
    };
    expect(actions.saveUnixTime(payload)).toEqual(expectedAction);
  });

  it('create result action', () => {
    const payload = {};
    const expectedAction = {
      type: types.SAVE_RESULT,
      payload
    };
    expect(actions.saveResult(payload)).toEqual(expectedAction);
  });

  it('create toggle drawer action', () => {
    const payload = false;
    const expectedAction = {
      type: types.TOGGLE_DRAWER,
      payload
    };
    expect(actions.toggleDrawer(payload)).toEqual(expectedAction);
  });
});
