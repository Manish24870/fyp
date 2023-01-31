from rest_framework import serializers
from listings.models import Listing


class ListingSerializer(serializers.ModelSerializer):
    country=serializers.SerializerMethodField()
    seller_username=serializers.SerializerMethodField()
    seller_agency_name=serializers.SerializerMethodField()
    seller_profile_picture=serializers.SerializerMethodField()

    class Meta:
        model=Listing
        fields='__all__'
    def get_seller_agency_name(self,obj):
        return obj.seller.profile.agency_name

    def get_seller_profile_picture(self, obj):
        return obj.seller.profile.profile_picture.url

    def get_seller_username(self, obj):
        try:
            return obj.seller.username
        except AttributeError as e:
            print("AttributeError:", e)
            return None

    def get_country(self,obj):
        return "Nepal"
   
        
