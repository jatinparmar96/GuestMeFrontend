import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getSpeaker, updateSpeakerProfile } from '../../Api/Speaker.service';
import placeholder from '../../assets/placeholder.png';
import MultiSelect from '../form/multi-select/MultiSelect';
import Loader from '../loader/Loader';
import style from './SpeakerUpdateProfile.module.scss';

const SpeakerUpdateProfile = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {},
  });

  const [loadingState, setLoadingState] = useState(true);

  const processImage = (imageFile, onChange) => {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onloadend = (event) => {
      onChange(event.target.result);
    };
  };

  useEffect(() => {
    const fetchSpeakerDetails = async () => {
      const speaker = JSON.parse(localStorage.getItem('user'));
      if (speaker) {
        const { data } = await getSpeaker(speaker.id);
        delete data['reviews'];
        reset({ ...data });
        setLoadingState(false);
      } else {
        console.log('Speaker token not found');
      }
    };
    fetchSpeakerDetails();
  }, [reset]);

  return (
    <>
      <motion.div
        className={style.speakerUpdateProfile}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}

      >
        <h3>My Info</h3>
        <p>Information here will be published</p>

        {loadingState && <Loader />}
        {!loadingState && (
          <form
            onSubmit={handleSubmit(async (data) => {
              const updatedData = await updateSpeakerProfile(data);
              toast('Profile updated successfully', {
                type: 'success',
                autoClose: 2000,
              });
              reset(updatedData.data);
            })}
          >
            <div className={style.topGrid}>
              <div className={style.topLeft}>
                <Controller
                  name="profilePicture"
                  control={control}
                  render={({ field: { name, onChange, value } }) => (
                    <>
                      <img
                        className={style.profilePhoto}
                        src={value || placeholder}
                        alt="Profile"
                      />
                      <label
                        className={style.imageLabel}
                        htmlFor="profilePicture"
                      >
                        Update my profile photo
                      </label>
                      <input
                        id="profilePicture"
                        type="file"
                        name="profilePicture"
                        className={style.profilePicture}
                        onChange={(e) => {
                          processImage(e.target.files[0], onChange);
                        }}
                      />
                    </>
                  )}
                />
              </div>
              <div className={style.topRight}>
                <div className={style.twoColumn}>
                  <div className={style.first}>
                    <label className={style.boldFont}>First name</label>
                    <input
                      className={style.blockDisplay}
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      {...register('firstName', {
                        required: 'This is a required field',
                      })}
                    />
                  </div>
                  <div className={style.last}>
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
                <div className={style.double}>
                  <label className={style.boldFont}>
                    Job Title / Company Name
                  </label>
                  <input
                    className={`${style.blockDisplay} ${style.oneColumn}`}
                    type="text"
                    placeholder="Tagline Here"
                    name="tagline"
                    {...register('tagline')}
                  />
                </div>

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

                  <fieldset className={style.dMethod}>
                    <legend className={style.boldFont}>Delivery Method</legend>
                    <div className={style.deliveryMethod}>
                      <input
                        type="checkbox"
                        name="isInPerson"
                        value={true}
                        {...register('conditions.isInPerson')}
                      />
                      <label> In Person</label>
                      <input
                        type="checkbox"
                        name="isOnline"
                        value={true}
                        {...register('conditions.isOnline')}
                      />
                      <label> Online</label>
                    </div>
                  </fieldset>
                </div>

                <div className={style.twoColumn}>
                  <div>
                    <label className={style.boldFont}>Price per hour</label>
                    <span>
                      $ &nbsp;
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
                  <MultiSelect
                    className={style.skills}
                    label="Skills"
                    onChange={onChange}
                    value={value}
                  />
                );
              }}
            />

            <label className={style.boldFont}>Certifications</label>
            <input
              className={`${style.blockDisplay} ${style.certifications}`}
              type="text"
              name="certifications"
              {...register('certifications')}
            />
            <label className={style.boldFont}>Youtube video</label>
            <input
              type="text"
              name="videos"
              className={style.blockDisplay}
              {...register('videos')}
            />

            <label className={style.boldFont}>About me</label>
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
              <button disabled={!(isDirty && isValid)} type="submit">
                Save
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </>
  );
};

export default SpeakerUpdateProfile;
