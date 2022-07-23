import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getSpeaker, updateSpeakerProfile } from '../../Api/Speaker.service';
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
      const speaker = JSON.parse(localStorage.getItem('user'));
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
      <div className={style.speakerUpdateProfile}>
        <h3>My Info</h3>
        <p>Information here will be published</p>
        <form
          onSubmit={handleSubmit((data) => {
            updateSpeakerProfile(data);
          })}
        >
          <div className={style.topGrid}>
            <div className={style.topLeft}>
              <img
                className={style.profilePhoto}
                src={getValues('profilePicture')}
                alt="Profile"
              />
              <label className={style.imageLabel} htmlFor="profilePicture">
                Update my profile photo
              </label>
              <input
                id="profilePicture"
                type="file"
                name="profilePicture"
                className={style.profilePicture}
                onChange={(e) => {
                  processImage(e.target.files[0]);
                }}
              />
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

              <label className={style.boldFont}>Job Title / Company Name</label>
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
                  <div className={style.deliveryMethod}>
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
                  </div>
                </fieldset>
              </div>

              <div className={style.twoColumn}>
                <div>
                  <label className={style.boldFont}>Price per hour</label>
                  <span>$ &nbsp;
                  <input
                    type="number"
                    name="price"
                    {...register('conditions.price', {
                      required: 'This is a required field',
                    })}
                    />
                    &nbsp; / hour
                    </span>
                </div>
                {/* <fieldset className={style.radio}>
                  <legend className={style.boldFont}>Can Volunteer?</legend>
                  <input
                    type="radio"
                    name="yes"
                    value="yes"
                    id='yes'

                    {...register('canVolunteer')}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    name="no"
                    value="no"
                    id='no'

                    {...register('canVolunteer')} />
                  <label htmlFor="no">No</label>
                </fieldset> */}
              </div>
            </div>
          </div>
          <div className={style.checkboxes}>
          <fieldset>
            <legend className={style.boldFont}>Area of expertise</legend>
            <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Law"
              {...register('conditions.areas')}
            />
            <label> Law</label>
            </div>
            <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Finance"
              {...register('conditions.areas')}
            />
                <label> Finance</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Arts / Design"
              {...register('conditions.areas')}
            />
                <label> Arts / Design</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Science"
              {...register('conditions.areas')}
            />
                <label> Science</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Health & Well-being"
              {...register('conditions.areas')}
            />
                <label> Health & Well-being</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Leadership"
              {...register('conditions.areas')}
            />
                <label> Leadership</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Education"
              {...register('conditions.areas')}
            />
                <label> Education</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Technology"
              {...register('conditions.areas')}
            />
                <label> Technology</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Environment"
              {...register('conditions.areas')}
            />
                <label> Environment</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Sports"
              {...register('conditions.areas')}
            />
                <label> Sports</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Business"
              {...register('conditions.areas')}
            />
                <label> Business</label>
              </div>
              <div className={style.area}>
            <input
              type="checkbox"
              name="areas"
              value="Others"
              {...register('conditions.areas')}
            />
                <label> Others</label>
              </div>
          </fieldset>
            <fieldset>

            <legend className={style.boldFont}>Language</legend>
            <div className={style.language}>
              <input
              type="checkbox"
              name="language"
              value="English"
              {...register('conditions.language')}
            />
                <label> English</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="French"
              {...register('conditions.language')}
            />
                <label> French</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Spanish"
              {...register('conditions.language')}
            />
                <label> Spanish</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Mandarin"
              {...register('conditions.language')}
            />
                <label> Mandarin</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Hindi"
              {...register('conditions.language')}
            />
                <label> Hindi</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Arabic"
              {...register('conditions.language')}
            />
                <label> Arabic</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Portuguese"
              {...register('conditions.language')}
            />
                <label> Portuguese</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Russian"
              {...register('conditions.language')}
            />
                <label> Russian</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Japanese"
              {...register('conditions.language')}
            />
                <label> Japanese</label>
              </div>
              <div className={style.language}>
            <input
              type="checkbox"
              name="language"
              value="Others"
              {...register('conditions.language')}
            />
                <label> Others</label>
              </div>
            </fieldset>
          </div>

          <Controller
            name="skills"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <MultiSelect className={style.skills} label="Skills" onChange={onChange} value={value} />
              );
            }}
          />

          <label className={style.boldFont}>
            Certifications
          </label>
          <input
            className={style.blockDisplay}
            type="text"
            name="certifications"
          />
          <label className={style.boldFont} >
            Youtube video
          </label>
          <input
            type="text"
            name="videos"
            className={style.blockDisplay}
            {...register('videos')} />


          <label className={style.boldFont}>
            About me
          </label>
          <textarea
            className={style.blockDisplay}
            name="about"
            {...register('about', { required: 'This is a required field' })}
          />
          {/* <Controller
          name="availability"
          control={control}
          render={({ field: { name, onChange, value } }) => (
            <SpeakerCalendar {...{ name, onChange, value }}></SpeakerCalendar>
          )}
        /> */}

          <div className={style.alignBtn}>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SpeakerUpdateProfile;
