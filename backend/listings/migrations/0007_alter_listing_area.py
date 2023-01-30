# Generated by Django 4.1.5 on 2023-01-28 09:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0006_remove_listing_location_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='area',
            field=models.CharField(blank=True, choices=[('Inner Ringroad', 'Inner Ringroad'), ('Outer Ringroad', 'Outer Ringroad')], max_length=20, null=True),
        ),
    ]