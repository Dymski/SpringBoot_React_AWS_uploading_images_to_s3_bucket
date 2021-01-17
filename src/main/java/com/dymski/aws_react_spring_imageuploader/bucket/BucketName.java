package com.dymski.aws_react_spring_imageuploader.bucket;

public enum BucketName {

    PROFILE_IMAGE("imageuploader");

    private final String bucketName;


    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }

}
