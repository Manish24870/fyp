# Generated by Django 4.1.5 on 2023-02-04 16:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_profile_seller_listing_count'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='seller_listing_count',
        ),
    ]