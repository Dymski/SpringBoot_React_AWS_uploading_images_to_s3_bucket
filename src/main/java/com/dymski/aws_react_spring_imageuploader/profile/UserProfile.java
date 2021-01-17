package com.dymski.aws_react_spring_imageuploader.profile;


import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

public class UserProfile {

    private UUID userProfileID;
    private String userName;
    private String userProfileImageLink; // s3 key

    public UserProfile(UUID userProfileID,
                       String userName,
                       String userProfileImageLink) {
        this.userProfileID = userProfileID;
        this.userName = userName;
        this.userProfileImageLink = userProfileImageLink;
    }

    public UUID getUserProfileID() {
        return userProfileID;
    }

    public void setUserProfileID(UUID userProfileID) {
        this.userProfileID = userProfileID;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Optional<String> getUserProfileImageLink() {
        return Optional.ofNullable(userProfileImageLink);
    }

    public void setUserProfileImageLink(String userProfileImageLink) {
        this.userProfileImageLink = userProfileImageLink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile that = (UserProfile) o;
        return Objects.equals(userProfileID, that.userProfileID) &&
               Objects.equals(userName, that.userName) &&
               Objects.equals(userProfileImageLink, that.userProfileImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userProfileID, userName, userProfileImageLink);
    }
}
