import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoomOne = new ClassRoom(19);
  const classRoomTwo = new ClassRoom(20);
  const classRoomThree = new ClassRoom(34);

  return [classRoomOne, classRoomTwo, classRoomThree];
}
