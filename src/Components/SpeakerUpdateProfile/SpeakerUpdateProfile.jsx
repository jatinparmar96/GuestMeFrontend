import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { post } from '../../api/api';
import { getSpeaker } from '../../api/Speaker.service';
import SpeakerCalendar from '../calendar/speaker/speaker-calendar';
import MultiSelect from '../form/multi-select/MultiSelect';
import style from './SpeakerUpdateProfile.module.scss';

const SpeakerUpdateProfile = () => {
  const { register, control, handleSubmit, getValues, reset } = useForm({
    defaultValues: {},
  });

  const processImage = (imageFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = (event) => {
      reset({ profilePicture: reader.result });
    };
  };

  useEffect(() => {
    const fetchSpeakerDetails = async () => {
      const speaker = JSON.parse(localStorage.getItem('speaker'));
      if (speaker) {
        const { data } = await getSpeaker(speaker.id);
        delete data['reviews'];
        reset({ ...data });
      } else {
        console.log('Speaker token not found');
      }
    };
    fetchSpeakerDetails();
  }, [reset]);

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          post('/speakers/update/profile', data).then((res) => {});
        })}
      >
        <div className={style.topGrid}>
          <div className={style.topLeft}>
            <input
              type="file"
              name="profilePicture"
              onChange={(e) => {
                processImage(e.target.files[0]);
              }}
            />
            <img src={getValues('profilePicture')} alt="Profile" />
          </div>
          <div className={style.topRight}>
            <div className={style.twoColumn}>
              <div>
                <label className={style.boldFont}>First name</label>
                <input
                  className={style.blockDisplay}
                  type="text"
                  placeholder="Firstname"
                  name="firstName"
                  {...register('firstName', {
                    required: 'This is a required field',
                  })}
                />
              </div>
              <div>
                <label className={style.boldFont}>Last name</label>
                <input
                  className={style.blockDisplay}
                  type="text"
                  placeholder="Lastname"
                  name="lastName"
                  {...register('lastName', {
                    required: 'This is a required field',
                  })}
                />
              </div>
            </div>

            <label className={style.boldFont}>Job Title/Company Name</label>
            <input
              className={`${style.blockDisplay} ${style.oneColumn}`}
              type="text"
              placeholder="Tagline Here"
              name="about"
              {...register('about')}
            />

            <div className={style.twoColumn}>
              <div>
                <label className={style.boldFont}>Location</label>
                <input
                  className={style.blockDisplay}
                  type="text"
                  name="location"
                  {...register('location', {
                    required: 'This is a required field',
                  })}
                />
              </div>

              <fieldset>
                <legend className={style.boldFont}>Delivery Method</legend>
                <input
                  type="checkbox"
                  name="isInPerson"
                  {...register('conditions.isInPerson')}
                />
                <label> In Person</label>
                <input
                  type="checkbox"
                  name="isOnline"
                  {...register('conditions.isOnline')}
                />
                <label> Online</label>
              </fieldset>
            </div>

            <div className={style.twoColumn}>
              <div>
                <label className={style.boldFont}>Price per hour</label>
                <input
                  className={style.blockDisplay}
                  type="number"
                  name="price"
                  {...register('conditions.price', {
                    required: 'This is a required field',
                  })}
                />
              </div>
              <fieldset>
                <legend className={style.boldFont}>Can Volunteer?</legend>
                <input type="radio" name="yes" {...register('canVolunteer')} />
                <label>Yes</label>
                <input type="radio" name="no" {...register('canVolunteer')} />
                <label>No</label>
              </fieldset>
            </div>
          </div>
        </div>
        <fieldset>
          <legend className={style.boldFont}>Area of expertise</legend>
          <input
            type="checkbox"
            name="areas"
            value="Law"
            {...register('conditions.areas')}
          />
          <label> Law</label>
          <input
            type="checkbox"
            name="areas"
            value="Finance"
            {...register('conditions.areas')}
          />
          <label> Finance</label>
          <input
            type="checkbox"
            name="areas"
            value="Arts / Design"
            {...register('conditions.areas')}
          />
          <label> Arts / Design</label>
          <input
            type="checkbox"
            name="areas"
            value="Science"
            {...register('conditions.areas')}
          />
          <label> Science</label>
          <input
            type="checkbox"
            name="areas"
            value="Health & Well-being"
            {...register('conditions.areas')}
          />
          <label> Health & Well-being</label>
          <input
            type="checkbox"
            name="areas"
            value="Leadership"
            {...register('conditions.areas')}
          />
          <label> Leadership</label>
          <input
            type="checkbox"
            name="areas"
            value="Education"
            {...register('conditions.areas')}
          />
          <label> Education</label>
          <input
            type="checkbox"
            name="areas"
            value="Technology"
            {...register('conditions.areas')}
          />
          <label> Technology</label>
          <input
            type="checkbox"
            name="areas"
            value="Environment"
            {...register('conditions.areas')}
          />
          <label> Environment</label>
          <input
            type="checkbox"
            name="areas"
            value="Sports"
            {...register('conditions.areas')}
          />
          <label> Sports</label>
          <input
            type="checkbox"
            name="areas"
            value="Business"
            {...register('conditions.areas')}
          />
          <label> Business</label>
          <input
            type="checkbox"
            name="areas"
            value="Others"
            {...register('conditions.areas')}
          />
          <label> Others</label>
        </fieldset>
        <fieldset>
          <legend className={style.boldFont}>Language</legend>
          <input
            type="checkbox"
            name="language"
            value="English"
            {...register('conditions.language')}
          />
          <label> English</label>
          <input
            type="checkbox"
            name="language"
            value="French"
            {...register('conditions.language')}
          />
          <label> French</label>
          <input
            type="checkbox"
            name="language"
            value="Spanish"
            {...register('conditions.language')}
          />
          <label> Spanish</label>
          <input
            type="checkbox"
            name="language"
            value="Mandarin"
            {...register('conditions.language')}
          />
          <label> Mandarin</label>
          <input
            type="checkbox"
            name="language"
            value="Hindi"
            {...register('conditions.language')}
          />
          <label> Hindi</label>
          <input
            type="checkbox"
            name="language"
            value="Arabic"
            {...register('conditions.language')}
          />
          <label> Arabic</label>
          <input
            type="checkbox"
            name="language"
            value="Portuguese"
            {...register('conditions.language')}
          />
          <label> Portuguese</label>
          <input
            type="checkbox"
            name="language"
            value="Russian"
            {...register('conditions.language')}
          />
          <label> Russian</label>
          <input
            type="checkbox"
            name="language"
            value="Japanese"
            {...register('conditions.language')}
          />
          <label> Japanese</label>
          <input
            type="checkbox"
            name="language"
            value="Others"
            {...register('conditions.language')}
          />
          <label> Others</label>
        </fieldset>

        <Controller
          name="skills"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <MultiSelect label="Skills" onChange={onChange} value={value} />
            );
          }}
        />

        <label className={`${style.boldFont} ${style.blockDisplay}`}>
          Certifications
        </label>
        <input
          className={style.blockDisplay}
          type="text"
          name="certifications"
        />
        <label className={`${style.boldFont} ${style.blockDisplay}`}>
          Youtube videos
        </label>
        <input type="text" name="videos" {...register('videos')} />

        <label className={`${style.boldFont} ${style.blockDisplay}`}>
          About me
        </label>
        <textarea
          className={style.blockDisplay}
          name="about"
          {...register('about', { required: 'This is a required field' })}
        />
        <Controller
          name="availability"
          control={control}
          render={({ field: { name, onChange, value } }) => (
            <SpeakerCalendar {...{ name, onChange, value }}></SpeakerCalendar>
          )}
        />

        <div className={style.alignBtn}>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
};

export default SpeakerUpdateProfile;
