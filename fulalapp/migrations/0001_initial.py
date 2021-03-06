# Generated by Django 4.0.3 on 2022-04-28 14:23

import datetime
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StudentRegistrationDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('regno', models.CharField(max_length=50, verbose_name='Student Registrartion Number')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='First Name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='Last Name')),
                ('dob', models.DateField(verbose_name='Date Of Birth')),
                ('county', models.CharField(blank=True, max_length=30, verbose_name='County')),
                ('constituency', models.CharField(blank=True, max_length=30, verbose_name='Constituency')),
                ('school_name', models.CharField(blank=True, max_length=30, verbose_name='School Name')),
                ('grade', models.CharField(blank=True, max_length=10, verbose_name='Class/Grade')),
                ('dom', models.DateField(verbose_name='Date Of Menstruation')),
                ('photoid', models.ImageField(blank=True, null=True, upload_to='')),
                ('location', models.CharField(max_length=30, verbose_name='Location')),
                ('sub_location', models.CharField(max_length=30, verbose_name='Sub Location')),
                ('village', models.CharField(max_length=30, verbose_name='Village')),
                ('area_chief', models.CharField(max_length=30, verbose_name='Area chief')),
                ('chief_phoneno', models.CharField(max_length=30, verbose_name='Chief Phone Number')),
                ('mothers_name', models.CharField(max_length=30, verbose_name='Mothers Name')),
                ('fathers_name', models.CharField(max_length=30, verbose_name='Fathers Name')),
                ('phone_number', models.CharField(max_length=30, verbose_name='Phone Number')),
                ('status', models.CharField(choices=[('present', 'Present'), ('absent', 'Absent')], default='present', max_length=11)),
                ('created', models.DateTimeField(default=django.utils.timezone.now)),
                ('parent_name', models.CharField(blank=True, max_length=30, verbose_name='Parent/Guardian Name')),
                ('phoneno', models.CharField(blank=True, max_length=30, verbose_name='Phone Number')),
            ],
            options={
                'verbose_name_plural': 'Student Registration Details',
            },
        ),
        migrations.CreateModel(
            name='StudentPadCollectionDetails',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collection_date', models.DateField(default=datetime.datetime.now, verbose_name='Collection Date')),
                ('last_collected', models.DateField(verbose_name='Last collection Date')),
                ('served_by', models.CharField(max_length=30, verbose_name='Served BY')),
                ('regno', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pad_collection', to='fulalapp.studentregistrationdetails', verbose_name='Student ID')),
            ],
            options={
                'verbose_name_plural': 'Student Pad Collection Details',
            },
        ),
        migrations.CreateModel(
            name='JoinStudentPadTable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='First Name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='Last Name')),
                ('school_name', models.CharField(blank=True, max_length=30, verbose_name='School Name')),
                ('collection_date', models.DateField(default=datetime.datetime.now, verbose_name='Collection Date')),
                ('last_collected', models.DateField(verbose_name='Last collection Date')),
                ('served_by', models.CharField(max_length=30, verbose_name='Served BY')),
                ('regno', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='padcollection', to='fulalapp.studentregistrationdetails', verbose_name='Student ID')),
            ],
            options={
                'verbose_name_plural': 'Joint Student Pad Collection Details',
            },
        ),
    ]
