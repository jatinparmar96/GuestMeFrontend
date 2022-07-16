const OrganizationDetails = ({ booking }) => {
  console.log(booking);
  return (
    <>
      <p> Email {booking.organization.organizationEmail}</p>
      <p>Phone {booking.organization.organizationPhone}</p>
      <p>
        Time {booking.bookingDateTime.startDateTime} -{' '}
        {booking.bookingDateTime.endDateTime}
      </p>
      <p>Speech topic {booking.topic}</p>
      <p>Person in Charge {booking.personInCharge}</p>
      <p>Message {booking.message}</p>
    </>
  );
};

export default OrganizationDetails;
